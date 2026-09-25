#stage1 
FROM node:22-alpine AS BUILD
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Debug: show generated files
RUN ls -la /app
RUN ls -la /app/build
#stage2
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
