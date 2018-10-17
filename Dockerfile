# Source: https://github.com/zeit/now-static-build-starter/blob/master/Dockerfile
FROM mhart/alpine-node:10
# We store all our files in /usr/src to perform the build
WORKDIR /usr/src
# We first add only the files required for installing deps
COPY package.json ./
# We install our npm dependencies
RUN npm install
# We copy all source files
COPY . .
# We run the build and expose as /public
RUN npm run build && npm run export -- -o /public
