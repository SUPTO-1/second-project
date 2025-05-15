// lib/mongodb.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_URL;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!process.env.DB_URL) {
  throw new Error('Please define the DB_URL environment variable');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
