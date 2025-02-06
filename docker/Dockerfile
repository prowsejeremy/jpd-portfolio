# Base step
# ####################################

FROM node:20-slim AS base

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@latest


# Development step
# ####################################

FROM base AS dev

WORKDIR /app

RUN echo "Development build"

# Copy all other files.
COPY . /app

RUN if [ ! -f pnpm-lock.yaml ]; then \
      echo "Error: pnpm-lock.yaml not found." && exit 1; \
    fi

# Install non-prod dependancys too
RUN pnpm install --frozen-lockfile

CMD export NODE_TLS_REJECT_UNAUTHORIZED=0 && pnpm run dev
