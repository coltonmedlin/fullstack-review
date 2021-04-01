const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
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

let Repo = mongoose.model('Repo', repoSchema);
//Repo.createIndex({id: 1}, {unique: true});

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // Repo.insertMany(data, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //     return result;
  //   }
  // });

  data.forEach((item) => {
   Repo.updateOne({id: item.id}, item, {upsert: true}, (err, result) => {
     if (err) {
       console.log('error', err);
     } else {
       console.log('success', result);
     }
   });
  });


}

module.exports.save = save;