FROM nginx:1.21

RUN rm -rf /usr/share/nginx/html/*
COPY ./ops/nginx.conf /etc/nginx/nginx.conf
COPY ./ops/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/delivery-front/ /usr/share/nginx/html/
