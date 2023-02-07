import mongoose from "mongoose";
import { CreateMongoConnection } from "./create-mongo-connection";

declare global {
  var connection: Promise<typeof mongoose>;
}

let connection = global.connection;

if (!connection) {
  connection = global.connection = CreateMongoConnection.handle();
}

export default connection;
