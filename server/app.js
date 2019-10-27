require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});