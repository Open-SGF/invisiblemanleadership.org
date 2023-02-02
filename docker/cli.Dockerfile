FROM craftcms/cli:8.1-dev

ARG WWWGROUP
ARG WWWUSER

USER root

RUN addgroup -g $WWWGROUP craft
RUN adduser -D -s /bin/bash -G craft -u $WWWUSER craft

USER craft
