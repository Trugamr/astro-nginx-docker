FROM node:19.6.1-alpine3.17 as build
# Enable corepack so pnpm is available
RUN corepack enable
# Set working directory and start building app
WORKDIR /app
# Copy only package.json and pnpm-lock.yml 
COPY package.json pnpm-lock.yaml ./
# Install dependencies required to build the app
RUN pnpm i
# Copy app source
COPY . .
# Build the app
RUN pnpm run build


FROM nginx:1.23-alpine-slim as serve
# Set working directory to nginx static directory
WORKDIR /usr/share/nginx/html
# Clean default static assets
RUN rm -rf ./*
# Copy built app from build stage
COPY --from=build /app/dist ./
# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf
# Copy custom nginx config
COPY /docker/nginx.conf /etc/nginx/conf.d/nginx.conf
# Start nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]