import { BookService } from "@/application/services/book.service";
import makeConnection from "@/database/connection";
import errorHelper from "@/utils/error-helper";
import { Exceptions } from "@/utils/handle-error";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await makeConnection.handle();

  try {
    const book = await BookService.createBook(req.body);
    res.status(200).json(book);
  } catch (err: any) {
    const error = Exceptions.handle(err, err.message);
    res.status(error.status ?? 500).json(error.message);
  }
}
