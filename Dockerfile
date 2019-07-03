FROM node:11.1.0-alpine as build-stage

WORKDIR .
COPY . .
RUN yarn
RUN yarn build


FROM nginx:1.15-alpine
EXPOSE 80 443
COPY --from=build-stage ./build/ /usr/share/nginx/html