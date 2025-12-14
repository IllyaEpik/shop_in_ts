import type { Request, Response } from "express";
import { productService } from "./productService";
import { checkAndSend } from "../config/sender";

export const controllerMethods = {
    async create(req: Request, res: Response) {
        try {
        	const product = await productService.createProduct(req.body);
			checkAndSend(product,res,201)
        } catch (error) {
			console.error(error);
			res.status(500).json({ message: "Ошибка создания продукта" });
        }
    },
    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const product = await productService.updateProduct(id, req.body);
        // res.json(product);
		checkAndSend(product,res,200)
    },

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        await productService.deleteProduct(id);
        // res.json({ message: "Product deleted" });
		checkAndSend(productService,res,204)
    },
};
