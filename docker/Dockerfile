# Stage 1: Install dependencies
# ##############################
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@latest

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install


# Stage 2: Build the application
# ##############################
FROM deps AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

# Clean up dependencies with prune
RUN pnpm prune --prod


# Stage 3: Production runner
# ##############################
FROM node:20-alpine AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy essential files from builder
COPY --from=builder /app/public ./public
# Automatically leverages standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

# server.js is created by the standalone build
CMD ["node", "server.js"]