import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n').slice(1);
        const students = {
          CS: [],
          SWE: [],
        };

        lines.forEach((line) => {
          const cutLine = line.split(',');
          const firstName = cutLine[0];
          const field = cutLine[3];

          if (field === 'CS') {
            students.CS.push(firstName);
          } else if (field === 'SWE') {
            students.SWE.push(firstName);
          }
        });

        resolve(students);
      }
    });
  });
}

export default readDatabase;
