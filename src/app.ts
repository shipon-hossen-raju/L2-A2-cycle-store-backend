import express, { Request, Response } from "express";
import { orderRoute } from "./modules/oders/order.routes";
import { productRoute } from "./modules/product/product.routes";

const app = express();

app.use(express.json());

// default route or root route
app.get("/", (req: Request, res: Response) => {
  res.send("Cycle store backend server running");
});

// product routes
app.use("/api/products", productRoute);

// orders routes
app.use("/api/orders", orderRoute);

export default app;
