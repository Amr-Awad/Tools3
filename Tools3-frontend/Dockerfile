
FROM node:alpine3.14 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged  
COPY  --from=build /usr/local/app/dist/trip-scheduling /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# RUN chmod 777 /usr/share/nginx/html/assets/env.js
# RUN chmod 777 /usr/share/nginx



# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]