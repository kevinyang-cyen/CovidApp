// Register Post Route
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {
  const addUser = function(user) {
    // Checks if user is already in database
    const queryCheck = `SELECT * FROM users WHERE email = $1;`; 
    const userEmail = [user.email]; 
    return db.query(queryCheck, userEmail)
      .then(userData => {
        if (userData.rows.length > 0) {
          return null;
        } else {
        const queryString = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *;`;
        const values = [user.username, user.password, user.email];
        return db.query(queryString, values).then(res => res.rows[0]);
        }
      });
  };
  // Renders registration page
  router.post('/',(req,res) => {
      const user = req.body;
      user.password = bcrypt.hashSync(user.password, 12);
      // database contains unique emails
    addUser(user)
      .then(user => {
        if (!user) {
          res.status(401).send({ error: "Email already in system!" });
          return;
        }
        req.session.user_info = user;
      })
      .catch(e => {
        res.send(e)
        console.log(e)
      });
  });
  return router;
};