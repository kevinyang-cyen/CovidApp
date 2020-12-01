// const Fallback = require('express-history-api-fallback');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
require('dotenv').config('/.env');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const axios = require("axios");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('./react-front-end/build'));
// App.use(Fallback('index.html',{root: './react-front-end/build'}));
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
App.use('/map', mapRoute(db));
App.use('/heatmap', heatmapRoute());
App.use('/login', loginRoute(db));
App.use('/register', registerRoute(db));
App.use('/dashboard', dashboardRoute());
App.use('/quarantine', quarantineRoute(db));
App.use('/selfreport', selfreportRoute(db));
App.use('/news', newsRoute());


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

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
  https.get("https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/NewHybridRegionalHeathBoundaries/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json", (response) => {
    fs.writeFile('./react-front-end/src/data/health.json', JSON.stringify(response.data, null, 2), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });    
    }
  )
}, 86400000)




