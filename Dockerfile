FROM node:lts-bullseye

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV APPPATH /app/frontend

WORKDIR $APPPATH
RUN node -v
RUN npm -v
RUN chown -R node:node /usr/local/lib/node_modules
RUN chown -R node:node /usr/local/bin
RUN chown -R node:node $APPPATH
USER node
EXPOSE 5173
RUN npm create vite@latest filmore -- --template react
WORKDIR $APPPATH/filmore
RUN npm install

CMD ["npm", "run", "dev"]

