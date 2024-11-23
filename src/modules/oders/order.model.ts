import mongoose, { Schema, Types } from 'mongoose';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String, // todo: email validation
      required: true,
    },
    product: {
      type: Types.ObjectId,
      ref: 'product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const OrderModel = mongoose.model<TOrder>('order', orderSchema);

export default OrderModel;
