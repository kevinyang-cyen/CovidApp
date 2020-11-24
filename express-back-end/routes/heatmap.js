// Map Route
const express = require('express');
const router = express.Router();
const https = require('https');

module.exports = () => {

  router.get("/", (req, res) => {
    https.get(`https://api.covid19api.com/country/canada/status/confirmed/live?from=2020-11-10T00:00:00Z&to=2020-11-24T00:00:00Z`, (response) => {
      response.pipe(res);
    })
  });



  return router;
};