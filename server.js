const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.listen(port);
console.log('Listening on port ' + port);