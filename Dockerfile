FROM node:6.10.3-alpine
COPY package.json .
COPY server.js .
RUN npm install
EXPOSE 6000
CMD ["npm", "start"]
