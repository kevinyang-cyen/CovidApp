// Map Route
const express = require('express');
const router = express.Router();

// updates user quarantine_start_time with current time and sends back user info
module.exports = (db) => {

  router.post("/", (req, res) => {
    let now = new Date().getTime();
    const quarantineQuery = "UPDATE users SET quarantine_start_time = $1 WHERE email = $2 RETURNING *;"
    db.query(quarantineQuery, [now, req.body[1]])
      .then((data) => res.send([data.rows[0].username, data.rows[0].email, data.rows[0].quarantine_start_time, data.rows[0].has_self_reported]))
  });


  return router;
};