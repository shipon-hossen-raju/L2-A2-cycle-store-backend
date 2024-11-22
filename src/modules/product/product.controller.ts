import { Request, Response } from 'express';
import { productService } from './product.service';

// product create or store controller
const productCreateDB = async (req: Request, res: Response) => {
  try {
    const clientData = req.body;
    // console.log({ clientData });

    const createdResult = await productService.createProductDB(clientData);
    // console.log({ createdResult });

    //   send data
    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: createdResult,
    });
  } catch (error) {
    console.log({ error });

    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: error,
    });
  }
};

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const getProducts = await productService.getAllProducts();
    console.log({ getProducts });

    //   send data
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: getProducts,
    });
  } catch (error) {
    console.log({ error });

    res.status(400).json({
      success: false,
      message: 'Something went wrong!',
      error: error,
    });
  }
};

export const productController = { productCreateDB, getAllProducts };
