FROM node:20-alpine

# Set working dir
WORKDIR /app

# Copy dependency list
COPY package.json package-lock.json ./

# Install dependencies based on the preferred package manager.
RUN \
  if [ -f package-lock.json ]; then npm install; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Configure user groups and permissions.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown nextjs:nodejs /app && chmod -R 777 /app
USER nextjs

# Copy all other files.
COPY --chown=nextjs:nodejs . /app

CMD ["npm", "run", "dev"]
