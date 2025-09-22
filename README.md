# Library API

## Project Overview

The **Library API** is a RESTful API to manage a library system. It has two main resources:

* **Authors**: Information about authors.
* **Books**: Information about books, each belonging to an author.

The API supports Create, Read, Update, Delete (CRUD) operations, validation, and proper error handling.

---

## API Endpoints

### Authors

**Get all authors**
`GET /authors`
No request body. Returns all authors.

**Get author by ID**
`GET /authors/:id`
No request body. Returns a single author.

**Create a new author**
`POST /authors`
Request body (JSON):

```json
{
  "name": "Author Name",
  "bio": "Short biography of the author"
}
```

Response example:

```json
{
  "id": 1,
  "name": "Author Name",
  "bio": "Short biography of the author"
}
```

**Update an existing author**
`PUT /authors/:id`
Request body (JSON):

```json
{
  "name": "Updated Author Name",
  "bio": "Updated biography"
}
```

Response example:

```json
{
  "id": 1,
  "name": "Updated Author Name",
  "bio": "Updated biography"
}
```

**Delete an author**
`DELETE /authors/:id`
No request body. Response example:

```json
{
  "message": "Author deleted successfully"
}
```

### Books

**Get all books**
`GET /books`
No request body. Returns all books.

**Get book by ID**
`GET /books/:id`
No request body. Returns a single book.

**Get all books by a specific author**
`GET /books/author/:authorId`
No request body. Returns all books for a specific author.

**Create a new book**
`POST /books`
Request body (JSON):

```json
{
  "title": "Book Title",
  "genre": "Book Genre",
  "author_id": 1,
  "published_date": "YYYY-MM-DD"
}
```

Response example:

```json
{
  "id": 1,
  "title": "Book Title",
  "genre": "Book Genre",
  "author_id": 1,
  "published_date": "YYYY-MM-DD"
}
```

**Update an existing book**
`PUT /books/:id`
Request body (JSON):

```json
{
  "title": "Updated Book Title",
  "genre": "Updated Genre",
  "author_id": 1,
  "published_date": "YYYY-MM-DD"
}
```

Response example:

```json
{
  "id": 1,
  "title": "Updated Book Title",
  "genre": "Updated Genre",
  "author_id": 1,
  "published_date": "YYYY-MM-DD"
}
```

**Delete a book**
`DELETE /books/:id`
No request body. Response example:

```json
{
  "message": "Book deleted successfully"
}
```

---

## Validation and Error Handling

* Required fields must be provided when creating or updating authors/books.
* Invalid IDs return `404 Not Found`.
* Errors return JSON with a message describing the problem.
  Example error response:

```json
{
  "error": "Author not found"
}
```

---

## Notes

* All endpoints return JSON responses.
* Use **Postman** to send requests and test the API.
