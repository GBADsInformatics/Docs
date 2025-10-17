FROM node:lts AS base
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
WORKDIR /home/node/app
COPY ./website /home/node/app/

FROM base AS development
WORKDIR /home/node/app
RUN npm install --force
USER node
CMD ["npm", "start"]

FROM base AS production
WORKDIR /home/node/app
COPY --from=development /home/node/app/node_modules /home/node/app/node_modules
RUN npm run build

FROM nginx:stable-alpine AS deploy
WORKDIR /home/node/app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=production /home/node/app/build /usr/share/nginx/html/