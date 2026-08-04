# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Dev target: Vite dev server with HMR ----
FROM deps AS dev
COPY . .
EXPOSE 5173
ENV CHOKIDAR_USEPOLLING=true
CMD ["pnpm", "dev", "--host", "0.0.0.0"]

# ---- Build target: produce static assets ----
FROM deps AS build
COPY . .
RUN pnpm build

# ---- Production target: serve via nginx ----
FROM nginx:1.27-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
