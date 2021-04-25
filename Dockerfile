FROM node:12

ENV NODE_ENV=production

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn migrate

RUN yarn seed

EXPOSE 3000

CMD [ "yarn", "start:production" ]
