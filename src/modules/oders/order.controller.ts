import { Request, Response } from 'express';
import { orderService } from './orders.service';

// product create or store controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const clientData = req.body;
    console.log({ clientData });

    const createdResult = await orderService.orderCreateDB(clientData);
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
      error: error,
    });
  }
};

export const orderController = { createOrder };
