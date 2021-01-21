FROM node:lts
 WORKDIR /FEC
 COPY . .
 RUN npm install
 RUN npm run build
 CMD ["node", "server.js"]