const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 80;
const lanesController = require('./api/controllers/lanes');
const busesController = require('./api/controllers/buses');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.route('/lanes').get(lanesController.getLanes);
app.route('/all-lanes').get(lanesController.getAllLanes);

app.route('/buses/:id').get(busesController.getBus);
app.route('/all-buses/:id').get(busesController.getBuses);

app.listen(port);
console.log('Listening on port ' + port);

