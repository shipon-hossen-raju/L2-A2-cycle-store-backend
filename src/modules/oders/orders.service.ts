import ProductModel from '../product/product.model';
import OrderModel from './order.model';

const orderCreateDB = async (orderData: TOrder) => {
  const order = new OrderModel(orderData);
  return await order.save();
};

const productQuantityUpdate = async (clientData: TOrder) => {
  const productFind = await ProductModel.findById(clientData?.product);
  if (!productFind)
    return {
      message: `Your product is unavailable`,
      status: false,
      data: {},
    };

  // price checking
  const storeProductCalculate = productFind?.price * clientData.quantity;
  if (clientData.totalPrice < storeProductCalculate) {
    return {
      message: `Your price is low. Your price: ${clientData.totalPrice} & Our Product price: ${storeProductCalculate}`,
      status: false,
      data: {},
    };
  }

  let productQuantityUpdated;
  if (productFind?.quantity >= 1) {
    productQuantityUpdated = await ProductModel.findOneAndUpdate(
      { _id: clientData.product },
      {
        quantity: productFind?.quantity - clientData.quantity,
      },
      { new: true },
    );
  }

  return {
    message: 'product updated!',
    status: true,
    data: productQuantityUpdated,
  };
};

export const orderService = { orderCreateDB, productQuantityUpdate };
