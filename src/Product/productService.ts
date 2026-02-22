import { productRepository } from "./productRepository";
import {CreateProductInput, CreateProductInputWithCategory, IServiceContract, ProductInput } from "./productTypes";

export const productService:IServiceContract = {
    create(data) {
        return productRepository.create(data);
    },
    getAll(isSortByDate,skip,count,categoryId) {
        return productRepository.getAll(isSortByDate,skip,count,categoryId);
    },
    getById(id) {
        return productRepository.getById(id);
    },
    update(id, data) {
        return productRepository.update(id, data);
    },
    delete(id) {
        return productRepository.delete(id);
    },
    countProducts(categoryId) {
        return productRepository.countProducts(categoryId);
    },
    getSimilar(id) {
        return productRepository.getSimilar(id);
    },
};