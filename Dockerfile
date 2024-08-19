FROM archlinux/base

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV APPPATH /app/frontend

RUN sudo pacman -Syu nodejs-lts-iron

WORKDIR $APPPATH
RUN node -v
RUN npm -v
RUN chown -R node:node $APPPATH
USER node
VOLUME $APPPATH
EXPOSE 8000
RUN npm create vite@latest filmore -- --template react 
RUN cd filmore && npm install

CMD ["npm", "run", "dev"]

