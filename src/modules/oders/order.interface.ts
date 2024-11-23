import { ObjectId } from "mongoose";

export type TOrder = {
  email: String;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
