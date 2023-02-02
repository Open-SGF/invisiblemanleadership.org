FROM craftcms/cli:8.1-dev

ARG WWWGROUP
ARG WWWUSER

USER root

# change uid and gid for elasticsearch user
RUN apk --no-cache add shadow && \
    usermod -u $WWWUSER www-data && \
    groupmod -g $WWWGROUP www-data

RUN chown -R www-data:www-data /app

USER www-data
