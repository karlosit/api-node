FROM node:alpine3.10

RUN mkdir -p /apinode
WORKDIR /apinode

COPY package.json /
COPY yarn.lock /

RUN yarn install

COPY . /

EXPOSE 4000

# Environment variables
ENV NODE_ENV production
ENV PORT 4000
ENV PUBLIC_PATH "/"

CMD ["yarn", "start"]