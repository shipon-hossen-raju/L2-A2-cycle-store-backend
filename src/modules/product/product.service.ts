import ProductModel from './product.model';

// create product
const createProductDB = async (productData: TProduct) => {
  const product = new ProductModel(productData);
  return await product.save();
};

// create product
const getAllProducts = async () => {
  return await ProductModel.find();
};

export const productService = { createProductDB, getAllProducts };
