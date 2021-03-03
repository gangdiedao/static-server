FROM node:10.4.0
COPY . /kkt-static-server
WORKDIR /kkt-static-server
EXPOSE 5000
CMD ["npm", "start"]