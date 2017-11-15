FROM docker.io/node:6.11.5
MAINTAINER lfchen

COPY ./Server /src

EXPOSE 8082

CMD ["node","/src/index.js"]