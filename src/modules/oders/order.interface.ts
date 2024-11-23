import { Types } from "mongoose";

export type TOrder = {
  email: String;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
