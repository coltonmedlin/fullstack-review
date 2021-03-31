const express = require('express');
let app = express();
const bodyparse = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const structureData = require('../helpers/structureData.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparse());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log('POST TO /repos');

  getReposByUsername.getReposByUsername(req.body.handle)
    .then((data) => {
      //console.log('then goes here', data);
      const structuredData = structureData.structureData(data.data);
      res.send(structuredData);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

