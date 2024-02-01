const express = require('express');
const countStudentsAsync = require('./3-read_file_async');

const app = express();

const database = 'database.csv';

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const mess1 = 'This is the list of our students';
  countStudentsAsync(database)
    .then((result) => {

      const mess2 = result.sentence1;
      const mess3 = result.sentence1;
      const mess4 = result.sentence1;
      const message = `${mess1}\n${mess2}\n${mess3}\n${mess4}`
      res.type('text/plain').send(message)
    })
    .catch((error) => {
      const err = `${mess1}\n${error.message}`;
      res.type('text/plain').send(err);
    });
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
