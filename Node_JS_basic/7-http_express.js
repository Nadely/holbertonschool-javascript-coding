const express = require('express');
const countStudentsAsync = require('./3-read_file_async');

const app = express();



const database = 'database.csv';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
    countStudentsAsync(database)
      .then((result) => {
        res.write(`${result.sentence1}\n`);
        res.write(`${result.sentence2}\n`);
        res.write(`${result.sentence3}`);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  });

app.listen(1245, () => {
  console.log(`Server is running on http://localhost:1245`);
});

module.exports = app;
