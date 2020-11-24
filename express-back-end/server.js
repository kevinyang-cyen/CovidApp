const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
require('dotenv').config('/.env');
const cors = require('cors');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cors());

// Routes Import
const mapRoute = require('./routes/map.js');
const loginRoute = require('./routes/login.js');
const registerRoute = require('./routes/register.js');
const dashboardRoute = require('./routes/dashboard.js');
const quarantineRoute = require('./routes/quarantine.js');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);

db.connect();


// Mounting Resource Routes
App.use('/map', mapRoute());
App.use('/login', loginRoute(db));
App.use('/register', registerRoute(db));
App.use('/dashboard', dashboardRoute());
App.use('/quarantine', quarantineRoute(db));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});




