import { productRepository } from "./productRepository";
import {CreateProductInput, CreateProductInputWithCategory, ProductInput } from "./productTypes";

export const productService = {
    createProduct(data: CreateProductInputWithCategory) {
        return productRepository.create(data);
    },
    getAll(isSortByDate:boolean,skip:number,count:number) {
        return productRepository.getAll(isSortByDate,skip,count);
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