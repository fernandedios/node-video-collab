const expect = require('expect');
const { ObjectID } = require('mongodb');
const request = require('supertest');
const app = require('../app');
const { tasks, populateTasks, users, populateUsers} = require('./seed');

beforeEach(populateUsers);

describe('POST /login', () => {
  it('should login the user with right credentials successfully', (done) => {
    request(app)
      .post('/login')
      .send({ email: users[0].email, password: users[0].password })
      .expect(302)
      .end(done);
  });
});
