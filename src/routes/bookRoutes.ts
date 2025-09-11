import express from 'express';
import { books } from '../models/book';
import { validateBook } from '../middleware/validate';

const router = express.Router();

router.post('/', validateBook, (req, res) => {
  if (books.find(b => b.title === req.body.title)) {
    return res.status(409).json({ error: 'Book already exists' });
  }
  const id = books.length + 1;
  const newBook = { id, title: req.body.title, year: req.body.year, authorId: req.body.authorId };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.get('/', (req, res) => res.json(books));

router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

router.put('/:id', validateBook, (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  book.title = req.body.title;
  book.year = req.body.year;
  book.authorId = req.body.authorId;
  res.json(book);
});

router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === +req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(index, 1);
  res.status(204).send();
});

export default router;