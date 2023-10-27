FROM node:latest

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

ENV ADDRESS=0.0.0.0 PORT=3333

CMD ["npm", "run", "build", "&&", "npm", "run", "start"]