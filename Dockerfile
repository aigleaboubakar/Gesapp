FROM  node:23 AS base

FROM base AS development
WORKDIR /app
COPY package.json . 
ARG NODE_ENV
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run" ,"start-dev" ]

FROM  base AS production
WORKDIR /app
COPY package.json . 
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]