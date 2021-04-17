FROM node:latest

WORKDIR /home
COPY . .

ENV PORT 8080

RUN rm -rf node_modules/
RUN npm i -g pnpm
RUN pnpm i -P
RUN pnpm build

EXPOSE 8080

CMD ["pnpm", "start"]
