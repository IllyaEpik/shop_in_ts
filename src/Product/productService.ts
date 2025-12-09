import { productRepository } from "./productRepository";
import { ProductInput } from "./productTypes";

export const productService = {
    createProduct(data: ProductInput) {
        return productRepository.create(data);
    },
    updateProduct(id: number, data: ProductInput) {
        return productRepository.update(id, data);
    },
    deleteProduct(id: number) {
        return productRepository.delete(id);
    },
};
