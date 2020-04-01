FROM node:13.12-alpine

ARG VERSION=1.0
ARG REVISION=SNAPSHOT

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

WORKDIR /app

COPY . .

RUN npm install

RUN chmod +x start.sh
CMD ["sh", "start.sh"]