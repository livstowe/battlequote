FROM node:6.10.3-alpine

COPY /config/ /service/config/
COPY /public/ /service/public/
COPY /scripts/ /service/scripts/
COPY /src/ /service/src/
COPY /package.json /service/

EXPOSE 7000

WORKDIR /service/
RUN npm install
RUN npm run build
CMD ["npm", "run", "start-prod"]
