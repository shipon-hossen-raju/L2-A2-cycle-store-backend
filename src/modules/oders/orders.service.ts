import ProductModel from "../product/product.model";
import { TOrder } from "./order.interface";
import OrderModel from "./order.model";

const orderCreateDB = async (orderData: TOrder) => {
  const order = new OrderModel(orderData);
  return await order.save();
};

const productQuantityUpdate = async (clientData: TOrder) => {
  const productFind = await ProductModel.findById(clientData?.product);
  if (!productFind) {
    throw new Error("Product not found!");
  }

  // price checking
  const storeProductCalculate = productFind?.price * clientData.quantity;
  if (clientData.totalPrice < storeProductCalculate) {
    throw new Error(
      `Your price is low. Your price: ${clientData.totalPrice} & Our Product price: ${storeProductCalculate}`,
    );
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
    message: "product updated!",
    status: true,
    data: productQuantityUpdated,
  };
};

const revenueFindDB = async () => {
  const getTotalAmon = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  const totalRevenue =
    getTotalAmon.length > 0 ? getTotalAmon[0].totalRevenue : 0;

  return { totalRevenue };
};

export const orderService = {
  orderCreateDB,
  productQuantityUpdate,
  revenueFindDB,
};
