import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String, // todo: email validation
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const OrderModel = mongoose.model<TOrder>('order', orderSchema);

export default OrderModel;
