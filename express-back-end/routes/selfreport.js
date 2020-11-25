// Login Post Route
const express = require('express');
const router = express.Router();


module.exports = (db) => {

  const report = function(email, location) {
    console.log(email, location);
    const queryString = `
    SELECT * FROM users 
    WHERE email = $1;
   `;
    const values = [email];
    return db.query(queryString, values)
      .then(res => res.rows[0].id)
      .then(ID => {
        let now = new Date().getTime();
        const queryString = `
        INSERT INTO self_report_cases (user_id, latitude, longitude, created_date)
        VALUES ($1, $2, $3, $4);
        `;
        db.query(queryString, [ID, location[0], location[1], now]);
        
      })
  };

  // Enter case in database
  router.post('/', (req,res) => {
    let return_value = report(req.body[0][1], req.body[1]);
    res.send(return_value)
  });
 


  return router;
};