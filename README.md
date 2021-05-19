# reap-demo-fullstack

Mock photo sharing service using NestJS and Angular.

## How to run

```bash
yarn install
yarn --cwd frontend install
yarn --cwd frontend build
yarn start
```

or with docker:

```
yarn docker:build
yarn docker:run
```

And use browser to open http://localhost:3000

## Test

```bash
yarn test
yarn --cwd frontend test
```

## What have been done
#### backend
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

#### frontend
- Lazy load pages with Angular Router
- Login/Sign up
- Upload files
- Browse files from other users
- Sort files by creating time
- Modular and ready to add more features
- Unit tests
