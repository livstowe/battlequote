FROM node:6.10.3-alpine

COPY ./build/ /service/build/
COPY ./scripts/ /service/scripts/
COPY ./package.json /service/

EXPOSE 7000

WORKDIR /service/
RUN npm install
CMD ["npm", "run build"]
CMD ["npm", "run start-prod"]
