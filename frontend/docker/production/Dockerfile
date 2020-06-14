FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN  npm i && npm run build:prod && npm run export:prod
EXPOSE 80
CMD npm run start:prod
