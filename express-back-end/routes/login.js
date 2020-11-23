// Login Post Route
const express = require('express');
const router = express.Router();


module.exports = () => {

  router.post("/", (req, res) => {
    console.log(req);
    res.send('sent!');
  });


  return router;
};