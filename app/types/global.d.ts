import mongoose from "mongoose";

declare global {
  // Extend NodeJS Global interface with mongoose cache
  namespace NodeJS {
    interface Global {
      mongoose?: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      };
    }
  }
}

export {};
