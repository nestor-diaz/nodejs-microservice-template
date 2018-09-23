FROM node:latest

RUN mkdir -p /usr/src/service

WORKDIR /usr/src/service

COPY dist /usr/src/service/

EXPOSE 8090

CMD ["bash", "-c", "node main.js"]
