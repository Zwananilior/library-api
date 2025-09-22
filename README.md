# Library API

A RESTful API for managing a library system with Authors and Books, built using Node.js and Express.

This project demonstrates CRUD operations, input validation, and centralized error handling.

---

## Features

* Create, Read, Update, Delete Authors
* Create, Read, Update, Delete Books
* List all books by a specific author (`GET /books/author/:authorId`)
* Input validation (rejects invalid or missing fields)
* Centralized error handling (`400`, `404`, `500`)
* Logging middleware (logs HTTP method + URL)

---

## 📦 Project Structure

```
library-api/
│
├─ src/
│  ├─ index.js           # Entry point
│  ├─ models/
│  │  ├─ authors.js
│  │  └─ books.js
│  ├─ routes/
│  │  ├─ authorRoutes.ts
│  │  └─ booksRoutes.ts
│  ├─ middleware/
│  │  ├─ logger.js
│  │  ├─ validation.js
│  │  └─ errorHandler.js
│
├─ package.json
└─ README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd library-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Server will run at `http://localhost:3000`.

---

## 📚 API Endpoints

### Authors

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | /authors      | Create a new author |
| GET    | /authors      | List all authors    |
| GET    | /authors/\:id | Get author by ID    |
| PUT    | /authors/\:id | Update author by ID |
| DELETE | /authors/\:id | Delete author       |

#### Request Example: Create Author

POST `/authors`

```json
{
  "name": "Author Name",
  "title": "Short biography of the author",
  "authorId":""
}
```

Response Example:

```json
{
  "id": 1,
  "Year": "YYYY",
  "title": "Short biography of the author"
}
```

### Books

| Method | Endpoint                 | Description                          |
| ------ | ------------------------ | ------------------------------------ |
| POST   | /books                   | Create a new book                    |
| GET    | /books                   | List all books                       |
| GET    | /books/\:id              | Get book by ID                       |
| GET    | /books/author/\:authorId | List all books for a specific author |
| PUT    | /books/\:id              | Update book by ID                    |
| DELETE | /books/\:id              | Delete book                          |

#### Request Example: Create Book

POST `/books`

```json
{
  "title": "Book Title",
  "author_id": 1,
  "year": "YYYY"
}
```

Response Example:

```json
{
  "id": 1,
  "title": "Book Title",
  "author_id": 1,
  "published_date": "YYYY-MM-DD"
}
```

---

## ⚠️ Error Handling

* `400 Bad Request` – Missing or invalid fields
* `404 Not Found` – Resource does not exist
* `500 Internal Server Error` – Unexpected server error

Example Error Response:

```json
{
  "error": "Author not found"
}
```

---

## Testing

Use Postman or curl to test endpoints.

---

## Notes

* All endpoints return JSON responses.
* Logging middleware prints HTTP method + URL + timestamp in console.

