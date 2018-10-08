FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
EXPOSE 9000
RUN npm install
COPY . .
ENV RDS_URL=fashion-store-db.c2ec5yovuho5.us-east-1.rds.amazonaws.com
ENV RDS_USERNAME=root
ENV RDS_PASS=gcitproject
CMD ["npm", "start"]
