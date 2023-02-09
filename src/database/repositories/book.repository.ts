import { Book } from "../../entities/book";
import bookModel from "@/database/schemas/book.schema";
class BookRepository {
  static async create(book: Omit<Book, "id">) {
    return await bookModel.create(book);
  }
}

export default BookRepository;
