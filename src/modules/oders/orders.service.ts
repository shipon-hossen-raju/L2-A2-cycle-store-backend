import OrderModel from './order.model';

const orderCreateDB = async (orderData: TOrder) => {
  const order = new OrderModel(orderData);
  return await order.save();
};

export const orderService = { orderCreateDB };
