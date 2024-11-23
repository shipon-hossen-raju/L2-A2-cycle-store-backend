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

// get specific product
type TProductUpdated = { price?: number; quantity?: number };
const getSpecificProductUpdate = async (
  id: string,
  bodyData: TProductUpdated,
) => {
  let updateData: TProductUpdated = {};

  if (bodyData.price) {
    updateData.price = bodyData.price;
  }
  if (bodyData.quantity) {
    updateData.quantity = bodyData.quantity;
  }

  // specific product update
  const updated = await ProductModel.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  });

  return updated;
};

export const productService = {
  createProductDB,
  getAllProducts,
  getSpecificProducts,
  getSpecificProductUpdate,
};
