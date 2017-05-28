FROM node:6.10.3-alpine
COPY package.json /service/
COPY src/ /service/src/
RUN npm install
EXPOSE 6000
CMD ["npm", "start"]
