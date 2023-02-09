import BookRepository from "@/database/repositories/book.repository";
import { Book } from "@/entities/book";

export class BookService {
  static async createBook(book: Omit<Book, "id">) {
    if (book.price < 1) {
      throw new Error("Price must be greater than 1");
    }
    return await BookRepository.create(book);
  }
}
