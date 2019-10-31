const pool = require('../db/connection');

const getUserData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM users
  WHERE users.id = $1 
  `, [userID])
};

const getLoginData = (inputUsername) => {
  return pool.query(`
  SELECT *
  FROM users
  WHERE username = $1;
  `, [inputUsername])
};

module.exports = {getUserData, getLoginData}