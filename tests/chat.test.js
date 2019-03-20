var ObjectID = require('mongodb').ObjectID;
var seedData = require('./seed/seed'),
    tasks = seedData.tasks,
    populateTasks = seedData.populateTasks,
    users = seedData.users,
    populateUsers = seedData.populateUsers;

beforeEach(populateUsers);

describe('POST /login', function() {
  it('should login the user successfully', function(done) {

  });
});
