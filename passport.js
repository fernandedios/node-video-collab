var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username or password'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect username or password'
        });
      }

      return done(null, user);
    });
  }
));


passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callback,
    profileFields: ['id', 'displayName', 'email']
  },
  function(token, refreshToken, profile, done) {
    User.findOne({ facebookId: profile.id }, function(err, user) {
      if (err) return done(err);
      if (user) {
        return done(null, user); // usr already registered
      }
      else {
        // see if user is existing in db but have not logged in via fb
        User.findOne({ email: profile.emails[0].value }, function(err, user) {
          // yes. just save fb profile id to that user
          if (user) {
            user.facebookId = profile.id;
            return user.save(function(err) {
              if (err) return done(null, false, { message: 'Error saving user info' });
              return done(null, user);
            });
          }

          // not, then create a new user on db
          var user = new User();
          user.name = profile.displayName;
          user.email = profile.emails[0].value;
          user.facebookId = profile.id;
          user.save(function(err) {
            if (err) return done(null, false, { message: 'Error saving user info' });
            return done(null, user);
          });
        });
      }
    });
  }
));
