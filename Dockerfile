FROM node:6.10.3-alpine

COPY /website/config/ /service/config/
COPY /website/public/ /service/public/
COPY /website/scripts/ /service/scripts/
COPY /website/src/ /service/src/
COPY /website/package.json /service/

COPY /docs/ /docs/
COPY /README.md /

EXPOSE 7000

WORKDIR /service/
RUN npm install
RUN npm run build
CMD ["npm", "run", "start-prod"]
