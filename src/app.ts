import express from 'express';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(logger);

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.use(errorHandler);

export default app;