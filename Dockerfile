FROM docker.io/node:6.11.5
MAINTAINER lfchen

COPY ./Server /src

EXPOSE 8085

CMD ["node","/src/index.js"]