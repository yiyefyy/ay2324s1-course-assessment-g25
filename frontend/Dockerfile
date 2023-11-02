FROM node:17-alpine

WORKDIR /app

COPY package.json .

COPY .next /app/.next

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

