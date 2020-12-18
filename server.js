const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
require('dotenv').config('/.env');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const axios = require("axios");
const path = require("path");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('./react-front-end/build'));
App.use(cors());

// Routes Import
const mapRoute = require('./routes/map.js');
const heatmapRoute = require('./routes/heatmap.js');
const loginRoute = require('./routes/login.js');
const registerRoute = require('./routes/register.js');
const dashboardRoute = require('./routes/dashboard.js');
const quarantineRoute = require('./routes/quarantine.js');
const selfreportRoute = require('./routes/selfreport.js');
const newsRoute = require('./routes/news.js');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);

db.connect();


// Mounting Resource Routes
App.use('/api/map', mapRoute(db));
App.use('/api/heatmap', heatmapRoute());
App.use('/api/login', loginRoute(db));
App.use('/api/register', registerRoute(db));
App.use('/api/dashboard', dashboardRoute());
App.use('/api/quarantine', quarantineRoute(db));
App.use('/api/selfreport', selfreportRoute(db));
App.use('/api/news', newsRoute());


// Catch All
App.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './react-front-end/build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

axios.get("https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/NewHybridRegionalHeathBoundaries/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson")
.then( (response) => {
  fs.writeFile('./react-front-end/src/data/health.json', JSON.stringify(response.data, null, 2), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });  
}  
)

setInterval(function() {
  https.get("https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/NewHybridRegionalHeathBoundaries/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson", (response) => {
    fs.writeFile('./react-front-end/src/data/health.json', JSON.stringify(response.data, null, 2), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });    
    }
  )
}, 86400000)




