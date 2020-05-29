import { v4 } from "https://deno.land/std/uuid/mod.ts";

type Book = {
  id: string;
  name: string;
  author: string;
};

let books: Book[] = [
  { id: v4.generate(), name: "Sapiens", author: "Yuval Noah Harrari" },
  { id: v4.generate(), name: "Golden Threshold", author: "Sarojini Naidu" },
  { id: v4.generate(), name: "Gitanjali", author: "Rabindranath Tagore" },
  { id: v4.generate(), name: "A Garland of Memories", author: "Ruskin Bond" },
];

// /getBooks
export const getBooks = (context: any) => {
  context.response.body = {
    success: true,
    data: books,
  };
};

// get a single book
export const getBook = (context: any) => {
  console.log("params id -", context.params.id);
  const book: Book | undefined = books.find(
    (item) => item.id === context.params.id
  );

  if (book) {
    console.log("if book executed--");
    context.response.status = 200;
    context.response.body = {
      success: true,
      data: book,
    };
  } else {
    context.response.status = 404;
    context.response.body = {
      success: false,
      message: "No records found",
    };
  }
};

//post
export const addBook = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  if (!request.hasBody) {
    request.status = 400;
  } else {
    const book: Book = body.value;
    book.id = v4.generate();
    books.push(book);
    response.status = 201;
    response.body = {
      success: true,
      data: book,
    };
  }
};

//update Book
export const updateBook = async ({
  params,
  request,
  response,
}: {
  params: any;
  request: any;
  response: any;
}) => {
  const book: Book | undefined = books.find((item) => item.id === params.id);
  console.log("update calling...");
  if (book) {
    const body = await request.body();

    const updatedBook: { name: string; author: string } = body.value;

    books = books.map((item: Book) =>
      item.id === params.id ? { ...item, ...updatedBook } : item
    );
    response.status = 200;
    response.body = {
      success: true,
      data: books,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Book not found",
    };
  }
};

//delete book
export const deleteBook = ({
  params,
  response,
}: {
  params: any;
  response: any;
}) => {
  books = books.filter((item: Book) => item.id !== params.id);
  response.body = {
    success: true,
    data: books,
  };
};
