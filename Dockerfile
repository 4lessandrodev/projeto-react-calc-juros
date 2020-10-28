FROM node:12
WORKDIR usr/src/juros_calculator
COPY package.json .
COPY src .
COPY public .
RUN yarn 
RUN yarn build
CMD yarn start 
EXPOSE 3000
