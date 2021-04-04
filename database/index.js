require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DBROUTE);

const repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  description: String,
  url: String,
  owner: {
    id: Number,
    name: String,
    avatarUrl: String
  },
  stargazersCount: Number,
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (data) => {
  return new Promise((resolve, reject) => {
    data.forEach((item, index, array) => {
     Repo.updateOne({id: item.id}, item, {upsert: true}, (err, result) => {
       if (err) {
         console.log('error', err);
         reject(err);
       }
       if (index === array.length - 1) {
         resolve(true);
       }
      });
    });
  });
};

const fetchTopTwentyFive = () => {
  return new Promise((resolve, reject) => {
    Repo.find({}).sort({stargazersCount: -1}).limit(25).exec((err, docs) => {
      if (err) {
        reject(err);
      } else {
        let result = [];
        docs.forEach((doc) => {
          result.push(doc._doc);
        });
        resolve(result);
      }
    });
  });
};

module.exports.save = save;
module.exports.fetchTopTwentyFive = fetchTopTwentyFive;