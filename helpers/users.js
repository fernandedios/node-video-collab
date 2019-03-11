function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Users =
function () {
  function Users() {
    _classCallCheck(this, Users);

    this.users = [];
  }

  _createClass(Users, [{
    key: "addUser",
    value: function addUser(id, name, room) {
      var user = {
        id: id,
        name: name,
        room: room
      };
      this.users.push(user);
      return user;
    }
  }, {
    key: "removeUser",
    value: function removeUser(id) {
      var user = this.getUser(id);

      if (user) {
        this.users = this.users.filter(function (user) {
          return user.id !== id;
        });
      }

      return user;
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      return this.users.filter(function (user) {
        return user.id === id;
      })[0];
    }
  }, {
    key: "getUserList",
    value: function getUserList(room) {
      var users = this.users.filter(function (user) {
        return user.room === room;
      });
      var namesArray = users.map(function (user) {
        return user.name;
      });
      return namesArray;
    }
  }]);

  return Users;
}();

module.exports = {
  Users: Users
};
