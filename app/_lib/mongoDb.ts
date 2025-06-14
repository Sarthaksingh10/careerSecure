import mongoose from "mongoose";

const envMongoUrl = process.env.MONGODB_URL;

if (!envMongoUrl) {
  throw new Error(
    "Please define the MONGODB_URL in your environment variables."
  );
}

const mongodb_Url: string = envMongoUrl;

declare const global: NodeJS.Global & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

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
