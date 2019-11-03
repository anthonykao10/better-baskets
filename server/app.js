require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  const userID = req.headers.authorization
  
  const user = {} //get user from database
  req.user = user

  next();
});

app.use(cors());
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});