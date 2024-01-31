const express = require('express');

const app = express();
const port = 1245;

module.exports = app;

if (require.main === module) {
  app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
    });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
