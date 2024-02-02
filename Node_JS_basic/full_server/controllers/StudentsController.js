import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      res.write('This is the list of our students\n');
      const fields = Object.keys(data).sort((a, b) => (
        a.toLowerCase().localeCompare(b.toLowerCase())));
      fields.forEach((field) => {
        const students = data[field];
        const studentCount = students.length;
        const studentList = students.join(', ');
        res.write(`Number of students in ${field}: ${studentCount}. List: ${studentList}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('./database.csv');
      const students = data[major] || [];
      const studentList = students.join(', ');
      res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
