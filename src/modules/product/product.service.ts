import ProductModel from './product.model';

// create product
const createProductDB = async (productData: TProduct) => {
  const product = new ProductModel(productData);
  return await product.save();
};

// get all product
const getAllProducts = async () => {
  return await ProductModel.find();
};

// get specific product
const getSpecificProducts = async (id: string) => {
  return await ProductModel.findOne({ _id: id });
};

export const productService = {
  createProductDB,
  getAllProducts,
  getSpecificProducts,
};
