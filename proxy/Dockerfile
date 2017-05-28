FROM node:6.10.3-alpine
COPY package.json /service/
COPY src/ /service/src/
COPY public/ /service/public/
EXPOSE 7000
WORKDIR /service/
RUN npm install
CMD ["npm", "start"]
