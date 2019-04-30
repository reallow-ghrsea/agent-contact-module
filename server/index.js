require("newrelic");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../data/dbpg.js');

const app = express();
const PORT = 8081;


app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// renders new html for unique house data

//get requests
app.get('/:houseId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.get('/houseId/listedAgent/:houseId', (req, res) => {
  db.getListedAgent(req.params.houseId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

app.get('/houseId/premierAgents/:houseId', (req, res) => {
  db.getPremierAgents(req.params.houseId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});
