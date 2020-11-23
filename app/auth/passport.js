const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const LocalStratgy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;

const { authenticateUser, getUserByName } = require('../dao');
const { secretOrKey } = require('../config/config');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const localStratgy = new LocalStratgy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
}, async (usernameField, passwordField, done) => {
  let user = false;
  user = await authenticateUser({username: usernameField, password: passwordField});
  done(null, user);
});

const jwtStrategy = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('access-token'),
  secretOrKey,
  passReqToCallback: true,
}, async (req, payload, done) => {
  const user = await getUserByName(payload.id);
  if (user === undefined) {
    const error = { message: 'Unauthorized user'}
    done(error, false);
    return;
  }
  req.loggedinUser = user;
  done(null, user);
});

module.exports.initializePassport = async (app) => {
  app.use(passport.initialize());

  passport.use('local-login', localStratgy);
  passport.use('jwt', jwtStrategy);

  app.use(passport.session());
};

module.exports.passport = passport;
