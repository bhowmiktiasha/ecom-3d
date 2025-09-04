# ---------- images should be built in linux/amd64 , by default macos m1/m2 chip is linux/arm64 ----------

FROM --platform=linux/amd64 node:20-alpine AS build

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

RUN npm run build

# ---------- Run stage (Nginx) ----------
FROM --platform=linux/amd64 nginx:stable-alpine


# Copy a custom nginx config (ensures SPA routing works)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files to Nginx's html directory
# Vite:
COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
