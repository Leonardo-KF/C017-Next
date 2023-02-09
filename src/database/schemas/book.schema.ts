import { Schema, model, models } from "mongoose";

const BookSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  resume: { type: String, required: true },
  price: { type: Number, required: true },
});

export default model("Book", BookSchema) || models.Book;
