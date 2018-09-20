FROM node:latest

RUN npm install -g nodemon
RUN mkdir -p /usr/src/service

WORKDIR /usr/src/service

COPY dist /usr/src/service/

EXPOSE 8080

CMD ["bash", "-c", "PORT=8080 nodemon main.js"]
