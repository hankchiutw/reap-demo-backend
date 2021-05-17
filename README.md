# reap-demo-backend

Simple API service using NestJS.

## How to run

```bash
yarn install
yarn start
```

or with docker:

```
yarn docker:build
yarn docker:run
```

And the base URL is http://localhost:3000


## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e
```

## What have been done
- API endpoints
  - GET /auth/me
  - POST /auth/login
  - POST /auth/signup
  - GET /auth/logout
  - GET /photo
  - GET /photo/:photoId/static
  - POST /photo/upload
  - GET /user
- Use sqlite for demo
- Modular and ready to add more APIs
- Unit tests and e2e tests
- Can deploy using Dockerfile
