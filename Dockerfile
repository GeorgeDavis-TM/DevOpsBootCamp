FROM node:12

WORKDIR /usr/src/app

COPY ./lab_3/app/packages*.json .

RUN npm install

COPY ./lab_3/app .

ENV DB_NAME=${{secrets.DB_NAME}}
ENV DB_HOST=${{secrets.DB_HOST}}
ENV DB_USER=${{secrets.DB_USER}}
ENV DB_PASSWORD=${{secrets.DB_PASSWORD}}

ENV TREND_AP_KEY=${{secrets.TREND_AP_KEY}}
ENV TREND_AP_SECRET=${{secrets.TREND_AP_SECRET}}

EXPOSE 8080

CMD ["npm", "start"]