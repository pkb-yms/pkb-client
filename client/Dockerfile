FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

RUN apk update && apk add git curl
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# pnpm install에 필요한 파일
# COPY package.json pnpm-lock.yaml package-lock.json ./ # pnpm 세팅 후 주석 제거
COPY package.json package-lock.json ./

# install project dependencies
# RUN pnpm install --frozen-lockfile # pnpm 세팅 후 주석 제거
RUN npm install --frozen-lockfile --legacy-peer-deps

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# run app for production with minification
EXPOSE 3000

# CMD [ "pnpm", "run", "dev" ] # pnpm 세팅 후 주석 제거
CMD [ "npm", "run", "dev"]