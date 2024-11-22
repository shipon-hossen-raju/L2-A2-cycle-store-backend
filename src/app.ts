import express, { Request, Response } from 'express';
import { productRoute } from './modules/product/product.routes';

const app = express();

app.use(express.json());

// default route or root route
app.get('/', (req: Request, res: Response) => {
  res.send('Cycle store backend server running');
});

// app routes
app.use('/api/products', productRoute);

export default app;
