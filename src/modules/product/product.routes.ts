import express from 'express';
import { productController } from './product.controller';
const route = express.Router();

route.post('/', productController.productCreateDB);

export const productRoute = route;
