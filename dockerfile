# base image
FROM node:16.20.2

# set working directory
RUN mkdir -p /app

# copy host files to container
COPY . /app

# expose host port
EXPOSE 3000

# start app
CMD [ "node", "/app/index.js" ]
