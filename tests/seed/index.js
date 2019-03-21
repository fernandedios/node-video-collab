const { ObjectID } = require('mongodb');
const User = require('../../models/user');
const Task = require('../../models/task');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users  = [
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

const tasks = [
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

const populateTasks = (done) => {
  Task.remove({})
    .then(() => {
      return Task.insertMany(tasks);
    })
    .then(() => done());
};

const populateUsers = (done) => {
  User.remove({})
    .then(async () => {
      var userOne = new User(users[0]);
      var userTwo = new User(users[1]);
      userOne.setPassword(users[0].password);
      userTwo.setPassword(users[1].password);
      userOne.save();
      userTwo.save();

      return Promise.all([userOne, userTwo]);
    })
    .then(() => {
      done();
    })
    .catch(err => console.log(err));
};

module.exports = { users, tasks, populateUsers, populateTasks };
