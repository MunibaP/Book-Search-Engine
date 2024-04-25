const express = require('express');
const path = require('path');
const db = require('./config/connection');

// importing Apollo Server
const { ApolloServer } = require('@apollo/server');

// importing middleware function for authenticating
const { authMiddleware } = require('./utils/auth');

//importing typeDefs and resolvers
const {typeDefs, resolvers } = require('./schemas');

const { expressMiddleware } = require('@apollo/server/express4');

const app = express();
const PORT = process.env.PORT || 3001;

// creating a new Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});

// Added Apollo Server middleware to Express
// server.applyMiddleware({ app });
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  }

  // Providing the React app's main HTML file to the client's web browser for any route that is not handled by GraphQL
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
