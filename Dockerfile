FROM node:14-alpine

WORKDIR /movie_consumer

ENV PORT=3010 DB_HOST=localhost DB_PORT=3306 DB_USER=root DB_PASSWORD=thehand DB_NAME=demodb

COPY package.json /movie_consumer/package.json

COPY . /movie_consumer

RUN npm install

RUN npm install pm2 -g

CMD ["npm", "start"]
