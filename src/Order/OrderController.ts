import { Request, Response } from "express";
import { orderService } from "./OrderService";

export const orderController = {
  async create(req: Request, res: Response) {
    try {
      const order = await orderService.create(req.body);
      res.status(201).json(order);
    } catch (error: any) {
      res.status(400).json({
        message: error.message || "Order creation failed",
      });
    }
  },
};
