FROM node:12

WORKDIR /usr/src/app

COPY lab_3/app/package*.json .

RUN npm install

COPY lab_3/app .

EXPOSE 8080

CMD ["npm", "start"]
