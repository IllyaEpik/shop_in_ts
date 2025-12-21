import { productRepository } from "./productRepository";
import { ProductInput } from "./productTypes";

export const productService = {
    createProduct(data: ProductInput) {
        return productRepository.create(data);
    },
    getAll() {
        return productRepository.getAll();
    },
    getById(id: number) {
        return productRepository.getOne(id);
    },
    updateProduct(id: number, data: Partial<ProductInput>) {
        return productRepository.update(id, data);
    },
    deleteProduct(id: number) {
        return productRepository.delete(id);
    },
};