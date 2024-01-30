const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n').slice(1);
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
