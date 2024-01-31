const http = require('http');
const fs = require('fs');
const countStudentsAsync = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const database = 'database.csv';
    countStudentsAsync(database)
      .then(() => {
        fs.readFile(database, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }
          const lines = data.trim().split('\n').filter(line => line.trim() !== '').slice(1);
          const studentsByField = {};

          lines.forEach((line) => {
            // eslint-disable-next-line no-unused-vars
            const [firstname, lastname, age, field] = line.split(',');
            if (field && field.trim() !== '') {
              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstname);
            }
          });

          let responseText = 'This is the list of our students\n';
          let totalStudents = 0;

          for (const field in studentsByField) {
            if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
              const students = studentsByField[field];
              totalStudents += students.length;
            }
          }

          responseText += `Number of students: ${totalStudents}\n`;

          for (const field in studentsByField) {
            if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
              const students = studentsByField[field];
              responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }
          }
          res.end(responseText);
        });
      })
      .catch((error) => {
        console.error(error.message);
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
