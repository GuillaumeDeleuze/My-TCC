import express from 'express';
import { port } from './config/environment';
import apolloServer from './graphql';
import connectDB from './db';

const app = express();

async function startApolloServer() {
  await connectDB(); // Connexion à la base de données
  console.log('Connected to database');

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 GraphQL server running at port: ${port}`);
  });
}

startApolloServer();
