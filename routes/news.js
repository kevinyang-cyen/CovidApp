// News Route
const express = require('express');
const router = express.Router();
const https = require('https');

// "https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=af7f35ff3e5649688948cfaffbf5f607&pageSize=100&sortBy=relevancy";
// "https://spreadsheets.google.com/feeds/list/1qRN1CTiEBqQkxfOUI8_wYfXiWxoVjHKiwruslmfOqSs/1/public/values?alt=json";

// Calls all API required for the dashboard and returns the data
module.exports = () => {

  router.get("/newsreports", (req, res) => {
    https.get("https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=af7f35ff3e5649688948cfaffbf5f607&pageSize=100&sortBy=relevancy", (response) => {
      response.pipe(res);
    })
  });

  router.get("/vaccinereports", (req, res) => {
    https.get("https://spreadsheets.google.com/feeds/list/1qRN1CTiEBqQkxfOUI8_wYfXiWxoVjHKiwruslmfOqSs/1/public/values?alt=json", (response) => {
      response.pipe(res);
    })
  });


  return router;
};