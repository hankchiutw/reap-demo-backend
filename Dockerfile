FROM node:14-slim

RUN apt-get update
RUN apt-get install -y sqlite3

WORKDIR /app

COPY . ./
RUN yarn install && yarn build
COPY .env.prod ./dist/.env

RUN cd frontend && yarn install && yarn build --prod

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
