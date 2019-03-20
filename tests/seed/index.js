var ObjectID = require('mongodb').ObjectID;

var User = require('../../models/user');
var Task = require('../../models/task');

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

var tasks = [
  {
    _id: new ObjectID,
    title: 'Task One',
    owner: userOneId
  },
  {
    _id: new ObjectID,
    title: 'Task Two',
    owner: userTwoId
  }
];

var populateTasks = function(done) {
  Task.remove({});
    .then(function() {
      return Task.insertMany(tasks);
    })
    .then(function() {
      done();
    });
};

var populateUsers = function(done) {
  User.remove({});
    .then(function() {
      var userOne = new User(users[0]).setPassword(users[0].password);
      var userTwo = new User(users[1]).setPassword(users[1].password);
      userOne.save();
      userTwo.save();

      return Promise.all([userOne, userTwo]);
    })
    .then(function() {
      done();
    });
};

module.exports = {
  users: users,
  tasks: tasks,
  populateUsers: populateUsers,
  populateTasks: populateTasks
};
