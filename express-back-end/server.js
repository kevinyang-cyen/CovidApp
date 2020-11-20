const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
require('dotenv').config('/.env');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

// ElephantSQL Setup
var pg = require('pg');

//or native libpq bindings
//var pg = require('pg').native

var conString = process.env['POSTGRESURL'] //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('CREATE TABLE users (id SERIAL PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL)', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

