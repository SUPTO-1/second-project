import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let clientPromise;

if (!clientPromise) {
  clientPromise = client.connect();
}

export async function POST(request) {
  try {
    const database = client.db('next_hero');
    const collection = database.collection('users');
    
    const newUser = await request.json();
    
    // Check for existing user
    const existingUser = await collection.findOne({ email: newUser.email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }
    const result = await collection.insertOne(newUser);
    
    return NextResponse.json(
      { 
        message: 'User created successfully',
        userId: result.insertedId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}