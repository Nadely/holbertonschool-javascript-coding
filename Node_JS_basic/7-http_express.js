const express = require('express');
const fs = require('fs').promises;
const countStudentsAsync = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = 'database.csv';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    await countStudentsAsync(database);
    const data = await fs.readFile(database, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const studentsByField = {};

    lines.forEach((line) => {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = line.split(',');
      if (field && field.trim() !== '') {
        studentsByField[field] = studentsByField[field] || [];
        studentsByField[field].push(firstname);
      }
    });

    let responseText = 'This is the list of our students\n';
    const totalStudents = lines.length;

    responseText += `Number of students: ${totalStudents}\n`;

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const students = studentsByField[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
    }

    res.send(responseText);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
