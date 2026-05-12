FROM nginx:alpine

RUN rm -rf /usr/nginx/html/*

COPY ./site-facudade/* /usr/nginx/html

EXPOSE 80
