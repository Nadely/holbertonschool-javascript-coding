const fs = require('fs');

function countStudentsAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const studentsByField = {};

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (field && field.trim() !== '') {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      for (const field in studentsByField) {
        if (studentsByField.hasOwnProperty(field)) {
          const students = studentsByField[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudentsAsync;
