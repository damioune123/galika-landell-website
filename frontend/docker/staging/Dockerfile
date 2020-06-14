FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm i && npm run build:staging
RUN  npm i
EXPOSE 80
CMD npm run start:staging
