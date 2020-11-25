// Map Route
const express = require('express');
const router = express.Router();


module.exports = () => {

  router.get("/", (req, res) => {
    console.log(req.body);
    res.send("hello");
  });


  return router;
};
