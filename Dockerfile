FROM node:14-slim

RUN apt-get update
RUN apt-get install -y sqlite3

WORKDIR /app

COPY package*.json ./

RUN yarn install --only=production

COPY . ./

EXPOSE 3000
CMD [ "yarn", "start" ]
