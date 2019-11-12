const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./db/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getEmployees = (request, response, next) => {
  pool.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    response.status(200).json(results.rows)
  })
}

// const addBook = (request, response) => {
//   const { author, title } = request.body

//   pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
//     if (error) {
//       throw error
//     }
//     response.status(201).json({ status: 'success', message: 'Book added.' })
//   })
// }

app
  .route('/employees')
  // GET endpoint
  .get(getEmployees)
  // // POST endpoint
  // .post(addBook)

// Start server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${server.address().port} ...`);
});

module.exports = server;