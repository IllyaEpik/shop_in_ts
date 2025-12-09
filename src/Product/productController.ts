import type { Request, Response } from "express";
import { productService } from "./productService";

export const controllerMethods = {
    async create(req: Request, res: Response) {
        const product = await productService.createProduct(req.body);
        res.json(product);
    },
    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const product = await productService.updateProduct(id, req.body);
        res.json(product);
    },

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        await productService.deleteProduct(id);
        res.json({ message: "Product deleted" });
    },
};
