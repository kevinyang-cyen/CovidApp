// Map Route
const express = require('express');
const router = express.Router();


module.exports = (db) => {

  router.post("/", (req, res) => {
    let now = new Date().getTime();
    console.log(req.body);
    const quarantineQuery = "UPDATE users SET quarantine_start_time = $1 WHERE email = $2 RETURNING *;"
    db.query(quarantineQuery, [now, req.body[1]])
      .then((data) => res.send([data.rows[0].username, data.rows[0].email, data.rows[0].quarantine_start_time]))
  });


  return router;
};