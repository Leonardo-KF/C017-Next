import bookModel from "@/database/schemas/book.schema";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const book = await bookModel.create(req.body);
  res.status(200).json({
    book: book,
  });
}
