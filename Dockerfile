#stage1 
FROM node:20-alpine AS BUILD
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
#stage2
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
