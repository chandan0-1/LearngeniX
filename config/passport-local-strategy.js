const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

// authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: "true",
    },
    function (req, email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          // req.flash("error", err);
          return done(err);
        }

        if (!user || user.password != password) {
          // req.flash("error", "Invalid Credentials!");
          return done(null, false);
        }

        // if user found
        return done(null, user);
      });
    }
  )
);

// serializing the user to decide which key is kept in the the cookies
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// de-seralizing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    return done(null, user);
  });
});

// check if the user is authenticated?
passport.checkAuthentication = function (req, res, next) {
  // if user is sign in, then pass on the request to the next function (Controller's action)
  if (req.isAuthenticated()) {
    return next();
  }

  // if the user is not signed in
  return res.redirect("/login");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    // req.user contains the current signed in user  from the session cookie and we are sending
    // it to the locals for the views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
