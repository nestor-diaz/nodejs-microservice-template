FROM node:latest

RUN npm install -g nodemon
RUN mkdir -p /usr/src/service

WORKDIR /usr/src/service

COPY dist /usr/src/service/

EXPOSE 4000

CMD ["bash", "-c", "nodemon main.js"]
