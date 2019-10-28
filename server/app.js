require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});