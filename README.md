# learn-expressjs

Learn express to build rest-api from scratch using express js and sequelize

### REST API Dokumentasi

| Endpoint          | HTTP Methods | Description       |
| ----------------- | ------------ | ----------------- |
| /todos            | GET          | get all todos     |
| /todos/add        | POST         | create new todo   |
| /todos/find/:id   | GET          | get todo by id    |
| /todos/update/:id | PUT          | update todo by id |
| /todos/delete/:id | DELETE       | delete todo by id |

### Tech Stack

| Nama Tech  | Link                                                    |
| ---------- | ------------------------------------------------------- |
| Express    | https://expressjs.com/                                  |
| Sequelize  | https://sequelize.org/                                  |
| PostgreSQL | https://www.postgresql.org/                             |
| NodeJS     | https://nodejs.org/en/                                  |
| JavaScript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| Git        | https://git-scm.com/                                    |

### How to run this project

1. Clone this repository to your local machine
2. Open your terminal and go to the project directory
3. Install all dependencies using `npm install`
4. Create a new database named `db-todos` in PostgreSQL
5. Update the database configuration in `config/config.json` based on your PostgreSQL configuration
6. Run migration using `sequelize db:migrate`
7. Start the server using `npm start`
8. Try to access the API using `http://localhost:3000/todos` in your browser or using any HTTP client application
