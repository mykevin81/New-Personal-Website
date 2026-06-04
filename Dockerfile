# syntax=docker/dockerfile:1.7

FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# `vite preview` serves the static dist/ build on PORT (default 4173)
ENV PORT=4173
EXPOSE 4173

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
