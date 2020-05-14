FROM node:12

WORKDIR /usr/src/app

COPY lab_3/app/package*.json .

RUN npm install

COPY lab_3/app .

EXPOSE 8080

ENV DB_NAME=tm_appsec_demo
ENV DB_HOST=ec2-18-219-86-69.us-east-2.compute.amazonaws.com
ENV DB_USER=tm_db_user
ENV DB_PASSWORD=1P@ssword2

ENV TREND_AP_KEY=6df972f0-1c28-4139-b49c-5c5781cf0147
ENV TREND_AP_SECRET=bc05d861-16d2-4839-8d66-b1684d46b75c

CMD ["npm", "start"]
