import ProductModel from './product.model';

// create product
const createProductDB = async (productData: TProduct) => {
  const product = new ProductModel(productData);
  return await product.save();
};

export const productService = { createProductDB };
