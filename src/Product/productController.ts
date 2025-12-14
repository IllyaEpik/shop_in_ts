import { Request, Response } from "express";
import productService from "./productService.js";

export const productController = {
  async create(req: Request, res: Response) {
    try {
      const product = await productService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ошибка создания продукта" });
    }
  },
};
