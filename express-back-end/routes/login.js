// Login Post Route
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = (db) => {


   // login function - authenticates user
   const login = function(email, password) {
    const queryString = `
    SELECT * FROM users 
    WHERE email = $1;
   `;
    const values = [email];
    return db.query(queryString, values)
      .then(res => res.rows[0])
      .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
        return null;
      });
  };
  // Checks if email/password is in database
  router.post('/', (req,res) => {
      const { email, password } = req.body;
      login(email, password)
        .then(user => {
          if (!user) {
            res.send('incorrect password');
            return;
          } else {
          res.send([user.username, user.email, user.quarantine_start_date]);
          }
        })
        .catch(e => {
          res.send(e)
        });
    });
 


  return router;
};