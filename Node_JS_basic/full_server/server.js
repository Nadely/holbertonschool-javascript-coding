import routes from'./routes';
const express = require('express');

const port = 1245;
const app = express();

app.use('/', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// module.exports = app;
export default app;

