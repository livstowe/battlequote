FROM node:6.10.3-alpine

COPY package.json /service/
COPY src/ /service/src/
COPY build/ /service/public/

EXPOSE 7000

WORKDIR /service/
RUN npm install
CMD ["npm", "build"]
CMD ["npm", "start-prod"]
