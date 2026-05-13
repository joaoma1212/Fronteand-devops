FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./site-facudade/* /usr/nginx/html

EXPOSE 80
