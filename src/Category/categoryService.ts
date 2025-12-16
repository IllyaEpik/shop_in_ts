import { CategoryRepository } from './categoryRepository';
import { ICategory, ICategoryInput } from './categoryTypes';

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }
    async createCategory(categoryData: ICategoryInput): Promise<ICategory> {
        const existingCategory = await this.categoryRepository.findByUrlName(categoryData.urlName);
        if (existingCategory) {
            throw new Error('Category with this url name already exists');
        }
        return this.categoryRepository.create(categoryData);
    }
    async getAllCategories(): Promise<ICategory[]> {
        return this.categoryRepository.findAll();
    }
    async getCategoryById(id: number): Promise<ICategory | null> {
        return this.categoryRepository.findById(id);
    }
    async updateCategory(id: number, categoryData: ICategoryInput): Promise<ICategory> {
        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error(`Category with id ${id} not found.`);
        }
        

        if (category.urlName !== categoryData.urlName) {
            const existingCategory = await this.categoryRepository.findByUrlName(categoryData.urlName);
            if (existingCategory && existingCategory.id !== id) {
                throw new Error('Another category with this url name already exists');
            }
        }

        return this.categoryRepository.update(id, categoryData);
    }
    async deleteCategory(id: number): Promise<ICategory> {
        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error(`category with id ${id} not found.`);
        }
        return this.categoryRepository.delete(id);
    }
}