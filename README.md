## REST API using Deno - BOOKS - (CRUD)

- Install denon
  `deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts`

- to generate a script file
  `denon init`

- Place your deno script in denon.json file

- To start
  `denon start`

#### List of requests - Examples

- Get All Books
  `curl --location --request GET 'localhost:8000/api/v1/books'`

- Get a Book
  `curl --location --request GET 'localhost:8000/api/v1/books/1bf266a0-26bd-4965-bef5-92a60228b6e3'`

- Add a Book
  `curl --location --request POST 'localhost:8000/api/v1/books/' \ --data-raw '{ "name": "Anna Karenina", "author":"Leo Tolstory"}'`

- Update a Book
  `curl --location --request PUT 'localhost:8000/api/v1/books/d74bbc4c-c699-4ddb-9c2a-4890171e70c0' \ --data-raw '{ "name": "Anna Karenina", "author":"Leo Tolstory"}'`

- Delete a Book
  `curl --location --request DELETE 'localhost:8000/api/v1/books/6f6c3bd3-d1ad-43e4-afb6-9437a94812f4'`
