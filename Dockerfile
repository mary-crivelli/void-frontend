FROM node:13.1.0 as builder

LABEL \
  org.opencontainers.image.authors="Dillon Carns & Mary Crivelli & Dennis Mila" \
  org.opencontainers.image.vendor="ReactJS" \
  org.opencontainers.image.url="local" \
  org.opencontainers.image.source="https://github.com/mary-crivelli/void-frontend" \
  org.opencontainers.image.version="$VERSION" \
  org.opencontainers.image.revision="$REVISION" \
  vendor="ReactJS" \
  name="void-frontend" \
  version="$VERSION-$REVISION" \
  summary="The frontend microservice" \
  description="This image contains the void microservice running with the ReactJS runtime."

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
COPY . /usr/src/app
RUN npm run build

FROM nginx:1.14.1-alpine
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY docker-entrypoint.sh generate_config_js.sh /
RUN chmod +x docker-entrypoint.sh generate_config_js.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

