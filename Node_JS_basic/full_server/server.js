const express = require('express');
const routes = require('./routes/index');

const port = 1245;
const app = express();

app.use('/', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
