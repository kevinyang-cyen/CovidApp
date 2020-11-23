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


// Mounting Resource Routes
App.use('/map', mapRoute());
App.use('/login', loginRoute());

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});




