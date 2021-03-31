const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
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

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

module.exports.save = save;