import mongoose from "mongoose";

export class CreateMongoConnection {
  static async handle(): Promise<typeof mongoose> {
    return await mongoose.connect(process.env.MONGO_URL ?? "");
  }
}
