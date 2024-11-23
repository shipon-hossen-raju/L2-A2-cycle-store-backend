import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'], // Required with a custom error message
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'], // Minimum length validation
      maxlength: [50, 'Name cannot exceed 50 characters'], // Maximum length validation
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be at least 1'], // Minimum value
      max: [10000, 'Price cannot exceed 10000'], // Maximum value
    },
    quantity: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger, // Custom validator to check if it's an integer
        message: 'Quantity must be an integer',
      },
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: 'Type must be one of Mountain, Road, Hybrid, BMX, or Electric',
      }, // Enum validation
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// import mongoose, { Schema } from 'mongoose';

// const productSchema = new Schema<TProduct>(
//   {
//     name: {
//       type: String,
//       required: [true, 'Product name is required'],
//       trim: true,
//       minlength: [3, 'Product name is required'],
//       maxlength: [50, 'Product name is required'],
//     },
//     brand: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     type: {
//       type: String,
//       enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     inStock: {
//       type: Boolean,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

const ProductModel = mongoose.model<TProduct>('product', productSchema);

export default ProductModel;
