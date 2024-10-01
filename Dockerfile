FROM node:20 as base

WORKDIR /usr/src/app
# TODO: update this after bun fixes https://github.com/oven-sh/bun/issues/8815
RUN npm install -g bun

FROM base AS install

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile



FROM base AS prerelease

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

RUN bun run build

ENV NODE_ENV=production

FROM oven/bun:1.1.29-alpine AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist dist
COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "start:prod" ]
