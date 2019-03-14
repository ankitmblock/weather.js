FROM node:8.11.4-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "run", "sample" ]
