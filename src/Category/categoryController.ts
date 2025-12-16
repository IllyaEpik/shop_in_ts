import { Request, Response } from 'express';
import { CategoryService } from './categoryService';

const categoryService = new CategoryService();

export class CategoryController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const newCategory = await categoryService.createCategory(req.body);
            res.status(201).json(newCategory);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Failed to create category' });
            }
        }
    }
    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch categoriees' });
        }
    }
    async findById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const category = await categoryService.getCategoryById(id);
            
            if (category) {
                res.status(200).json(category);
            } else {
                res.status(404).json({ error: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch category' });
        }
    }
    async update(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const updatedCategory = await categoryService.updateCategory(id, req.body);
            res.status(200).json(updatedCategory);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Failed to update category' });
            }
        }
    }
    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await categoryService.deleteCategory(id);
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Failed to deleyte category' });
            }
        }
    }
}