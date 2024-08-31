FROM node:alpine as build
WORKDIR /app

COPY . .

RUN npm install



RUN npm install -g nx
RUN nx reset
RUN nx build homepage --verbose

FROM nginx:stable-alpine as runner

COPY --from=build /app/dist/apps/homepage/browser /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]

