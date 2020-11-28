// Login Post Route
const express = require('express');
const router = express.Router();


module.exports = (db) => {
  var returnUser = {}

  const report = function(email, location) {
    const queryString = `
    UPDATE users 
    SET has_self_reported=true
    WHERE email = $1 RETURNING *;
   `;
    const values = [email];
    return db.query(queryString, values)
      .then(res => res.rows[0])
      .then(user => {
        returnUser = user;
        let now = new Date().getTime();
        const queryString = `
        INSERT INTO self_report_cases (user_id, latitude, longitude, created_date)
        VALUES ($1, $2, $3, $4);
        `;
        db.query(queryString, [user.id, location[0], location[1], now]);
        
      })
  };

  // Enter case in database
  router.post('/', (req,res) => {
    report(req.body[0][1], req.body[1])
      .then(response => res.send([returnUser.username, returnUser.email, returnUser.quarantine_start_time, returnUser.has_self_reported]));
    

  });
 


  return router;
};