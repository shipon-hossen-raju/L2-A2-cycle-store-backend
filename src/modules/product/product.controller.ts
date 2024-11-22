import { Request, Response } from 'express';
import { productService } from './product.service';

const productCreateDB = async (req: Request, res: Response) => {
  try {
    const clientData = req.body;
    console.log({ clientData });

    const createdResult = await productService.createProductDB(clientData);
    console.log({ createdResult });

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
      error: '',
    });
  }
};

export const productController = { productCreateDB };
