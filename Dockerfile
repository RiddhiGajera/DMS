FROM node:12

WORKDIR /usr/src/dms

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080

CMD ["npm", "start"]

