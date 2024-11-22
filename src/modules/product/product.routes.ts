import express from 'express';
import { productController } from './product.controller';
const route = express.Router();

// product create or store route
route.post('/', productController.productCreateDB);

// get all data
route.get('/', productController.getAllProducts);

// get query data
route.get('/?searchTerm', productController.getQueryProduct); // todo:

// get specific product data
route.get('/:productId', productController.getSpecificProducts);

export const productRoute = route;
