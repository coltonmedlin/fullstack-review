require('dotenv').config();
const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {

  return new Promise((resolve, reject) => {
    let options = {
      url: `https://api.github.com/users/${user}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${process.env.TOKEN}`
      }
    };

    axios.get(`https://api.github.com/users/${user}/repos`, options)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

}

module.exports.getReposByUsername = getReposByUsername;