# Authentication Microservice using ExpressJS

[![express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://github.com/expressjs)
[![swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)](https://github.com/swagger-api)
[![mongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![mongoDB](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://github.com/yarnpkg/berry)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Table of Contents

- [What's included](#whats-included)
- [Install](#install)
- [Environment Variables](#environment-variables)
- [Run](#run)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Test](#test)
- [Demo](#demo)

## What's included

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)

## Install

1. Clone the repo

2. Install the dependencies:

```bash
yarn install
```

3. Set the environment variables:

```bash
cp .env.example .env
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# Environment
NODE_ENV=development

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/express

# JWT
# JWT secret key
JWT_SECRET=CMESECRETKEY
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=5

# Login lockout: 5 * 60 * 1000 = 300000 = 5 minutes
WINDOW_MS = 300000

# Email Configuration: Sendgrid API
SENDGRID_API=GENERATE_YOUR_OWN
EMAIL_FROM=ItzaPizza@gmail.com
```

## Run

Run locally:

```bash
yarn dev
```

Run in production:

```bash
yarn start
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/api/documentation` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

## API Endpoints

List of available routes:

**Auth routes**:\
`POST /api/auth/register` - register\
`POST /api/auth/login` - login

**User routes**:\
`GET /api/users/me` - get logged-in user

## Test

1. You may use the swagger UI @ `http://localhost:3000/api/documentation` to test the API Endpoints or import the following [Postman collection](https://www.getpostman.com/collections/70a5fe0feeba271f616b)2
2. For emails to work you will have to provide a [sendgrid](https://sendgrid.com/) API Key in the .env file

## Demo

[Click here to access the demo](https://express-auth-demo-owehbeh.herokuapp.com)
