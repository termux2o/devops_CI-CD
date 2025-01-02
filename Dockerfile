FROM node
WORKDIR /app

COPY . .
EXPOSE 3000
RUN npm install
COPY package*.json ./

ENTRYPOINT start npm
CMD ["node","index.js"]