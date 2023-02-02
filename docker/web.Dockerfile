FROM craftcms/nginx:8.1-dev

ARG WWWGROUP
ARG WWWUSER

USER root

# change uid and gid for elasticsearch user
RUN apk --no-cache add shadow && \
    usermod -u $WWWUSER www-data && \
    groupmod -g $WWWGROUP www-data

RUN chown www-data /run/nginx.pid
RUN chown www-data /run/supervisord.pid
RUN chown -R www-data:www-data /var/lib/nginx/logs/
RUN chown -R www-data:www-data /app

COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

USER www-data

ENTRYPOINT ["start-container"]
