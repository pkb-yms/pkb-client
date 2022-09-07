FROM node:lts-alpine

WORKDIR /opt

RUN apk update && apk add git curl
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json pnpm-lock.yaml ./

# pnpm install에 필요한 파일
COPY package.json pnpm-lock.yaml ./

# install project dependencies
RUN pnpm install --frozen-lockfile

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# run app for production with minification
EXPOSE 3000

CMD [ "pnpm", "run", "start:dev" ]