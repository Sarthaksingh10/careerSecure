import mongoose from "mongoose";

const mongodb_Url = process.env.MONGODB_URL || " ";

if (!mongodb_Url) {
  throw new Error(
    "Please define the MONGODB_URI in your environment variables."
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodb_Url, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
