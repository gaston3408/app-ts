FROM node:16-stretch

WORKDIR /app

# Bundle APP files
COPY src /app
COPY ./tsconfig.json /app
COPY ./package.json /app
COPY ecosystem.config.js /app

RUN apt update
RUN chown -R node:node /app

ENV NPM_CONFIG_LOGLEVEL warn

USER node
