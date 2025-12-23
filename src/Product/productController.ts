import type { Request, Response } from "express";
import { productService } from "./productService";
import { checkAndSend } from "../config/sender";

export const controllerMethods = {
    async create(req: any, res: Response) {
        try {
            const { name, price, categoryId } = req.body;
            if (!name || !price || !categoryId) {
                return res.status(422).json({ message: "Некорктні дані при створенні продукту" });
            }

            const product = await productService.createProduct({
                ...req.body,
                userId: req.user.id
            });
            checkAndSend(product, res, 201);
        } catch (error) {
            res.status(500).json({ message: "Ошибка создания продукта" });
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const products = await productService.getAll();
            checkAndSend(products, res, 200);
        } catch (error) {
            res.status(401).json({ message: "Неавторизований доступ" });
        }
    },
    async getById(req: Request, res: Response) {
        const product = await productService.getById(Number(req.params.id));
        if (!product) {
            return res.status(404).json({ message: "Продукт не знайдено" });
        }
        checkAndSend(product, res, 200);
    },

    async update(req: any, res: Response) {
        try {
            const id = Number(req.params.id);
            const product = await productService.getById(id);

            if (!product) return res.status(404).json({ message: "Продукт не знайдено" });
            
            if (product.userId !== req.user.id) {
                return res.status(403).json({ message: "Відсутні права для оновлення продукту" });
            }

            const updated = await productService.updateProduct(id, req.body);
            checkAndSend(updated, res, 200);
        } catch (error) {
            res.status(422).json({ message: "Некоректні дані при оновленні продукту" });
        }
    },

    async delete(req: any, res: Response) {
        try {
            const id = Number(req.params.id);
            const product = await productService.getById(id);

            if (!product) return res.status(404).json({ message: "Продукт не знаййено" });

            if (product.userId !== req.user.id) {
                return res.status(403).json({ message: "відсутні права для видалення продукту" });
            }
            await productService.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Помилка при видаленні" });
        }
    },
};