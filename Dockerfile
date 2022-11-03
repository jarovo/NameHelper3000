# specify the node base image with your desired version node:<version>
FROM node:16
# replace this with your application's default port
EXPOSE 5173

COPY . /code
WORKDIR /code

CMD npm run dev
