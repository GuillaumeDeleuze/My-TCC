/* eslint-disable linebreak-style */
import express from 'express';
import graphqlServer from './graphql';

const app = express();

graphqlServer.applyMiddleware({
  app,
});

export default app;
