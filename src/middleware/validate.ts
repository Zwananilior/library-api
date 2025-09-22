import { Request, Response, NextFunction } from 'express';
import { authors } from '../models/author';

export const validateAuthor = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Author name is required' });
  next();
};

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, year, authorId } = req.body;
  if (!title || !year || !authorId) return res.status(400).json({ error: 'All book fields are required' });
  if (!authors.find(a => a.id === authorId)) return res.status(400).json({ error: 'Author does not exist' });
  next();
};