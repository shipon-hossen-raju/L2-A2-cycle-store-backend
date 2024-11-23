import { Request, Response } from 'express';
import { orderService } from './orders.service';

// product create or store controller
const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const clientData: TOrder = req.body;

    //   product update
    const productUpdate = await orderService.productQuantityUpdate(clientData);

    let createdResult;
    if (productUpdate?.status) {
      createdResult = await orderService.orderCreateDB(clientData);
    }
    //

    // send data
    res.status(200).json(
      productUpdate.status
        ? {
            success: true,
            message: 'Order created successfully',
            data: createdResult,
          }
        : productUpdate,
    );
  } catch (error) {
    console.log({ error });

    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: error,
    });
  }
};

export const orderController = { createOrder };
