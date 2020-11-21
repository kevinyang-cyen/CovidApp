// Map Route
const express = require('express');
const router  = express.Router();


module.exports = () => {

  router.get("/", (req, res) => {
    res.send('testing testing');
  });


  return router;
};
