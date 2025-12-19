import { productRepository } from "./productRepository";
import {CreateProductInput, CreateProductInputWithCategory, ProductInput } from "./productTypes";

export const productService = {
    createProduct(data: CreateProductInputWithCategory) {
        return productRepository.create(data);
    },
    updateProduct(id: number, data: ProductInput) {
        return productRepository.update(id, data);
    },
    deleteProduct(id: number) {
        return productRepository.delete(id);
    },
};
