import { CategoryRepository } from './categoryRepository';
import { ICategory, IServiceContract } from './categoryTypes';

export const CategoryService:IServiceContract =  {
    // Promise<ICategory>
    createCategory: async (categoryData) =>  {
        const existingCategory = await CategoryRepository.findByUrlName(categoryData.urlName);
        if (existingCategory) {
            throw new Error('Category with this url name already exists');
        }
        return CategoryRepository.create(categoryData);
    },
    getAllCategories: async () =>{
        return CategoryRepository.findAll();
    },
    getCategoryById: async (id) =>{
        return CategoryRepository.findById(id);
    },
    updateCategory: async (id, data) => {
        const category = await CategoryRepository.findById(id);
        if (!category) {
            throw new Error(`Category with id ${id} not found.`);
        }
        

        if (category.urlName !== data.urlName) {
            const existingCategory = await CategoryRepository.findByUrlName(data.urlName);
            if (existingCategory && existingCategory.id !== id) {
                throw new Error('Another category with this url name already exists');
            }
        }

        return await CategoryRepository.update(id, data);
    },
    deleteCategory: async (id) => {
        const category = await CategoryRepository.findById(id);
        if (!category) {
            throw new Error(`category with id ${id} not found.`);
        }
        return CategoryRepository.delete(id);
    }
}