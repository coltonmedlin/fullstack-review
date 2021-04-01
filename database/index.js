const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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
    data.forEach((item) => {
     Repo.updateOne({id: item.id}, item, {upsert: true}, (err, result) => {
       if (err) {
         console.log('error', err);
       } else {
         reject(err);
       }
     });
     resolve(true);
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