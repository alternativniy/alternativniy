import { MongoClient } from 'mongodb';

import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://alternativniy:55L8yBa1vJvT7pHV@cluster0.h09pn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

  useNewUrlParser: true,

  useUnifiedTopology: true,

});

async function database(req, res, next) {

  if (!client.isConnected()) await client.connect();

  req.dbClient = client;

  req.db = client.db('sample_restaurants');

  return next();

}

const middleware = nextConnect();

middleware.use(database);

export default middleware;