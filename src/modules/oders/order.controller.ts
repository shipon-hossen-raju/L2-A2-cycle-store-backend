import { Request, Response } from "express";
import { orderService } from "./orders.service";
import { TOrder } from "./order.interface";

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
            message: "Order created successfully",
            data: createdResult,
          }
        : productUpdate,
    );
  } catch (error) {
    console.log({ error });

    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: error,
    });
  }
};

// revenueFindDB
const revenueFind = async (req: Request, res: Response): Promise<void> => {
  try {
    //   product update
    const revenued = await orderService.revenueFindDB();

    // send data
    res.status(200).json({
      success: true,
      message: "Revenue calculated successfully",
      data: revenued,
    });
  } catch (error) {
    console.log({ error });

    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: error,
    });
  }
};

export const orderController = { createOrder, revenueFind };
