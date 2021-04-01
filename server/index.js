const express = require('express');
let app = express();
const bodyparse = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const structureData = require('../helpers/structureData.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparse());

app.post('/repos', function (req, res) {
  console.log('POST TO /repos');

  getReposByUsername.getReposByUsername(req.body.handle)
    .then((data) => {
      const structuredData = structureData.structureData(data.data);
      return structuredData;
    })
    .then((data) => {
      return db.save(data);
    })
    .then(() => {
      return db.fetchTopTwentyFive();
    })
    .then((queryResult) => {
      res.send(queryResult);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });

});

app.get('/repos', function (req, res) {
  db.fetchTopTwentyFive()
    .then((queryResult) => {
      res.send(queryResult);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

