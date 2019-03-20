var ObjectID = require('mongodb').ObjectID;

var User = require('../../models/user');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();

var users  = [
  {
    _id: userOneId,
    email: 'userOne@test.com',
    password: 'userOnePass'
  },
  {
    _id: userTwoId,
    email: 'userTwo@test.com',
    password: 'userTwoPass'
  }
];

var populateUsers = function(done) {
  User.remove({});
    .then(function() {
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne, userTwo]);
    })
    .then(function() {
      done();
    });
}

module.exports = {
  users: users,
  populateUsers: populateUsers
};
