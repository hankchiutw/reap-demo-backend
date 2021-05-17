FROM node:14-slim

RUN apt-get update
RUN apt-get install -y sqlite3

WORKDIR /app

COPY package*.json ./

RUN yarn install --only=production

COPY . ./
RUN yarn build

COPY .env.prod ./dist/.env

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
