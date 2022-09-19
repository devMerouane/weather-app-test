FROM node:16.17.0-alpine

WORKDIR /weather-app-test

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

