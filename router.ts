import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from "./controller/book.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/api/v1/books", getBooks)
  .get("/api/v1/books/:id", getBook)
  .post("/api/v1/books", addBook)
  .put("/api/v1/books/:id", updateBook)
  .delete("/api/v1/books/:id", deleteBook);

export default router;
