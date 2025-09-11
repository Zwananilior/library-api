

const router = express.Router();

router.post('/', validateAuthor, (req, res) => {
  const id = authors.length + 1;
  const newAuthor = { id, name: req.body.name };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

router.get('/', (req, res) => res.json(authors));

router.get('/:id', (req, res) => {
  const author = authors.find(a => a.id === +req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  res.json(author);
});

router.put('/:id', validateAuthor, (req, res) => {
  const author = authors.find(a => a.id === +req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  author.name = req.body.name;
  res.json(author);
});

router.delete('/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === +req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Author not found' });
  authors.splice(index, 1);
  res.status(204).send();
});

router.get('/:id/books', (req, res) => {
  const author = authors.find(a => a.id === +req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  const authorBooks = books.filter(b => b.authorId === author.id);
  res.json(authorBooks);
});

export default router;
