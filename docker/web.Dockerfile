FROM craftcms/nginx:8.1-dev

ARG WWWGROUP
ARG WWWUSER

USER root

RUN addgroup -g $WWWGROUP craft
RUN adduser -D -s /bin/bash -G craft -u $WWWUSER craft

COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

USER craft

ENTRYPOINT ["start-container"]
