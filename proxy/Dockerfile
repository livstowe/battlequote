FROM node:6.10.3-alpine
COPY package.json /service/
COPY src/ /service/src/
RUN npm install
EXPOSE 6789
WORKDIR /service/
CMD ["npm", "start"]
