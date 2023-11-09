FROM node:12

#Create app directory
RUN mkdir /app
WORKDIR /app

#Install app dependencies
#A wildcard is used to sure both package json and package-lock.json are copied
#Where available (npm@5+)
COPY package*.json /app/

RUN npm install
#if you are building your code for production
#RUN nom ci --only=production

#Bundle app source
COPY . /app

ENV NODE_ENV QA
ENV PORT 8080

EXPOSE 8080

CMD ["npm","start"]