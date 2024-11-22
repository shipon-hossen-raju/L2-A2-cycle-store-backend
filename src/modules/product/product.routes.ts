import express from 'express';
import { productController } from './product.controller';
const route = express.Router();

// product create or store route
route.post('/', productController.productCreateDB);

// get all data
route.get('/', productController.getAllProducts);

export const productRoute = route;
