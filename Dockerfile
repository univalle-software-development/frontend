FROM node:23-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV APPPATH /app/frontend

WORKDIR $APPPATH
RUN node -v
RUN npm -v
COPY . $APPPATH
RUN ls -ahl
RUN chown -R node:node /usr/local/lib/node_modules
RUN chown -R node:node $APPPATH/filmore
RUN chown -R node:node /usr/local/bin
RUN chown -R node:node $APPPATH
USER node
EXPOSE 5173
# Check if the directory 'my_directory' exists and execute a command based on that
RUN if [ -d "filmore" ]; then echo "Project exists"; else npm create vite@latest filmore -- --template react; fi
WORKDIR $APPPATH/filmore
RUN npm install

CMD ["npm", "run", "dev"]

