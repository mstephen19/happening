// Basic Imports
const express = require('express');
const path = require('path');
const log = require('morgan');
const routes = require('./controllers');
const compression = require('compression');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

// MongoDB Express Session Store stuff
// It's now an option to use req.session
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || 'mongodb://localhost/mapme',
  collection: 'mySessions',
});

store.on('error', (err) => {
  console.log(err);
});

const sess = {
  secret: 'superSecretSecret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    secret: 'superSuperSecret',
  },
  resave: false,
  saveUninitialized: true,
  store: store,
};

// Apollo Stuff
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

(async function start() {
  await gqlServer.start();
  gqlServer.applyMiddleware({ app });
})();

app.use(compression());
// Express Stuff
app.use(log('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session(sess));

app.use(routes);

process.env.NODE_ENV === 'production' &&
  app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(
      `Server: http://localhost:${PORT} \n GraphQL: http://localhost:${PORT}${gqlServer.graphqlPath}`
    );
  });
});
