![main test workflow status](https://github.com/liliwei25/nestjs-template/actions/workflows/main-test.yml/badge.svg)

## Description

NestJS template with everything you need to get started

1. Uses [commitlint](https://github.com/conventional-changelog/commitlint) to keep commits clean and tidy
2. Uses [eslint](https://eslint.org/), [prettier](https://prettier.io/), [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) to automatically format code
3. Uses [swc](https://swc.rs/) for speedy compilation
4. Uses TypeScript with [strict mode](https://www.typescriptlang.org/tsconfig/#strict) for improved code correctness
5. Enabled [helmet](https://github.com/helmetjs/helmet) and [cors](https://expressjs.com/en/resources/middleware/cors.html) for basic security
6. Uses [bun](https://bun.sh/)
7. Uses [zod](https://github.com/colinhacks/zod) for schema validation
8. Uses [Docker](https://www.docker.com/) for containerization
9. Uses [Github Actions](https://github.com/features/actions) for workflows

## Project setup

```bash
$ bun install
```

## Compile and run the project

```bash
# development
$ bun run start

# watch mode
$ bun run start:dev

# production mode
$ bun run start:prod
```

## Run tests

```bash
# unit tests
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

##

## License

This is [MIT licensed](https://github.com/liliwei25/nestjs-template/blob/main/LICENSE).
