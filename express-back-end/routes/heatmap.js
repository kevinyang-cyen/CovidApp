// Map Route
const express = require('express');
const router = express.Router();
const https = require('https');

module.exports = () => {

  router.get("/", (req, res) => {

    let dateNow = new Date();
    let twoWeeksAgo = new Date(Date.now() - 12096e5);
    https.get(`https://api.covid19api.com/country/canada/status/confirmed/live?from=${twoWeeksAgo}&to=${dateNow}`, (response) => {
      response.pipe(res);
    })
  });



  return router;
};