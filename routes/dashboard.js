// Map Route
const express = require('express');
const router = express.Router();
const https = require('https');

// Calls all API required for the dashboard and returns the data
module.exports = () => {

  router.post("/summary", (req, res) => {
    https.get(`https://api.opencovid.ca/summary?loc=${req.body['?loc']}&after=${req.body.after}`, (response) => {
      response.pipe(res);
    })
  });

  router.post("/mortality", (req, res) => {
    if (!req.body.loc) {
      https.get(`https://api.opencovid.ca/individual?stat=mortality`, (response) => {
        response.pipe(res);
      });
    } else {
      https.get(`https://api.opencovid.ca/individual?stat=mortality&loc=${req.body['loc']}`, (response) => {
        response.pipe(res);
      });
    }
  });

  router.post("/cases", (req, res) => {
    if (req.body.loc) {
      https.get(`https://api.opencovid.ca/individual?stat=cases&loc=${req.body['loc']}`, (response) => {
        response.pipe(res);
      });
    } else {
      res.send(null);
    }
  });

  router.post("/allProvincesSummary", (req, res) => {
    https.get(`https://api.opencovid.ca/summary?&after=${req.body.date}`, (response) => {
      response.pipe(res);
    });
  })

  return router;
};