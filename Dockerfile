FROM node:latest

RUN mkdir -p /usr/src/service

WORKDIR /usr/src/service

COPY dist /usr/src/service/

EXPOSE 4000

CMD ["bash", "-c", "node main.js"]
