FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
EXPOSE 9000
RUN npm install
COPY . .
CMD ["npm", "start"]
ENV DATABASE_URL=''
ENV DATABASE_USER=''
ENV DATABASE_PASSWORD=''
