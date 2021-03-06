const express = require('express');
require('dotenv').config();
require('./config/sync_config/config');
const models = require('./models');
require('./global_functions');
const userController = require('./controllers/UsersController');
const eventsController = require('./controllers/EventsController');
const bodyParser = require('body-parser');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require('./models').Users;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = CONFIG.jwt_encryption;

passport.use(
  new JwtStrategy(opts, async function(jwt_payload, done) {
    let err, user;
    [err, user] = await to(Users.findByPk(jwt_payload.user_id));

    if (err) return done(err, false);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  }),
);
// CORS
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, content-type, Authorization, Content-Type',
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

if (CONFIG.app === 'dev') {
  models.sequelize.sync();
}


app.get('/admin/users-list', 
        passport.authenticate('jwt', { session: false }),
        userController.getAll);

app.get('/admin/user-detail/:currentUserId', 
        passport.authenticate('jwt', { session: false }),
        userController.get);

app.post('/users', userController.create);
app.put('/admin/user-detail/:currentUserId',
        passport.authenticate('jwt', { session: false }),
        userController.update);
app.post('/events', 
          passport.authenticate('jwt', { session: false }),
          eventsController.create);

app.get('/events-list', 
        passport.authenticate('jwt', { session: false }),
        eventsController.getAll);

app.get('/event-detail/:currentEventId', 
        passport.authenticate('jwt', { session: false }),
        eventsController.get);

app.delete('/events/:currentEventId', 
          passport.authenticate('jwt', { session: false }),
          eventsController.deleteEvent);

app.patch('/events/:currentEventId', 
          passport.authenticate('jwt', { session: false }),
          eventsController.update);

app.post('/login',
          userController.login);

app.post('/sign-up',
          userController.create);

module.exports = app;
