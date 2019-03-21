const { ObjectID } = require('mongodb');
const request = require('supertest');
const app = require('../app');
const { tasks, populateTasks, users, populateUsers} = require('./seed');

beforeEach(populateUsers);

describe('POST /login', () => {
  it('should login the user successfully', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});
