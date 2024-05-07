FROM node:latest
WORKDIR /usr/src/app
COPY ./api/package*.json ./
RUN npm install
COPY ./api/src ./src
EXPOSE 3000
CMD ["npm", "start"]
