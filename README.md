# ShorePark

ShorePark is an visitor parking application. Integrated with leaflet maps.

## Features

- Get / PUT user by id
- Get user id booking
- Get / POST bookings
- Get / Delete bookings by id
- Get parking
- Get plate

## Tech Stack

**Client:** HTML/CSS, JavaScript, React, Sass, Axios

**Server:** Node.js, Express js, Knex.js

**Database:** MySQL

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sheilsh/sheila-ho-capstone-client
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Add shorepark to mySQL database

```bash
  create database shorepark;
```

Create .env file

```bash
  Sample ".env" code:
  DB_LOCAL_DBNAME=shorepark
  DB_LOCAL_USER= <mysql username>
  DB_LOCAL_PASSWORD= <mysql password>
  PORT=8080
```

Migrate

```bash
  npm run migrate
```

Seed

```bash
  npm run Seed
```

Start the serve

```bash
  npm run dev
```

## Authors

- [@Sheilsh](https://github.com/Sheilsh)
