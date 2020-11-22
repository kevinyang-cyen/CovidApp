import healthRegion from "../Health_Region_Summaries.json"
const L = require('leaflet');

// Map Route
const express = require('express');
const router = express.Router();


module.exports = () => {

  router.get("/", (req, res) => {
    const map = L.map('map').setView([43.659752, -79.378161], 20);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 21
    }).addTo(map);
    res.send(healthRegion);
  });


  return router;
};
