'use strict';

var socketIO = require('socket.io');
var ot = require('ot');
var Users = require('./helpers/users').Users;

var roomList = {};
var users = new Users();

module.exports = function(server) {
  var str = '// Welcome \n\n' + 'function helloWorld() {\n  console.log("Hello World!"); \n} \n\nhelloWorld();';
  var io = socketIO(server);

  io.on('connection', function(socket) {
    socket.on('joinRoom', function(data) {
      if (!roomList[data.room]) {
        var socketIOServer = new ot.EditorSocketIOServer(str, [], data.room, function(socket, cb) {
          var self = this;
          Task.findByIdAndUpdate(data.room, {content: self.document}, function(err) {
            if (err) {
              return cb(false);
            }

            cb(true);
          });
        });

        roomList[data.room] = socketIOServer;
      }

      users.removeUser(socket.id); // remove user from other active tasks
      users.addUser(socket.id, data.username, data.room);
      io.to(data.room).emit('updateUserList', users.getUserList(data.room));

      roomList[data.room].addClient(socket);
      roomList[data.room].setName(socket, data.username);

      socket.room = data.room;
      socket.join(data.room);

      console.log(users);
    });

    socket.on('chatMessage', function(data) {
      io.to(socket.room).emit('chatMessage', data);
    });

    socket.on('disconnect', function() {
      socket.leave(socket.room);
    });
  });
}
