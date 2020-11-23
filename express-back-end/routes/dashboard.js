// Map Route
const express = require('express');
const router = express.Router();
const https = require('https');

// "https://api.opencovid.ca/summary?loc=AB&after=01-01-2020"
// "https://api.opencovid.ca/individual?stat=mortality&loc=AB"
// "https://api.opencovid.ca/individual?stat=cases&loc=AB"


module.exports = () => {

  router.get("/summary", (req, res) => {
    https.get("https://api.opencovid.ca/summary?loc=AB&after=01-01-2020", (response) => {
      response.pipe(res);
    })
  });

  router.get("/mortality", (req, res) => {
    https.get("https://api.opencovid.ca/individual?stat=mortality&loc=AB", (response) => {
      response.pipe(res);
    })
  });

  router.get("/cases", (req, res) => {
    https.get("https://api.opencovid.ca/individual?stat=cases&loc=AB", (response) => {
      response.pipe(res);
    })
  });


  return router;
};