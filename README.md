# sheila-ho-capstone-server

Steps for server set up:

- Create a .env file
  Sample ".env" code:
  DB_LOCAL_DBNAME=shorepark
  DB_LOCAL_USER= <mysql username>
  DB_LOCAL_PASSWORD= <mysql password>
  PORT=8080

- Run "npm run migrate"
- Folllow by "npm run seed"
- Then run "npm run dev" to get the server running
