import mongoose from "mongoose";
import CreateMongoConnection from "./create-mongo-connection";

declare global {
  var connection: any;
  var mongo: {
    conn: typeof mongoose | null;
    mongoPromise: Promise<typeof mongoose> | null;
  };
}

let connection = global.mongo;

if (!connection) {
  connection = global.mongo = {
    mongoPromise: CreateMongoConnection.handle(),
    conn: null,
  };
}

class makeConnection {
  static async handle() {
    if (connection.conn) return connection.conn;

    if (!connection.mongoPromise) {
      connection.mongoPromise = CreateMongoConnection.handle();
    }

    try {
      connection.conn = await connection.mongoPromise;
    } catch (e) {
      connection.mongoPromise = null;
      throw e;
    }

    return connection.conn;
  }
}

export default makeConnection;
