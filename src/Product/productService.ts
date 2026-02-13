import { productRepository } from "./productRepository";
import {CreateProductInput, CreateProductInputWithCategory, IServiceContract, ProductInput } from "./productTypes";

export const productService:IServiceContract = {
    create(data: CreateProductInputWithCategory) {
        return productRepository.create(data);
    },
    getAll(isSortByDate:boolean,skip:number,count:number,categoryId:number) {
        return productRepository.getAll(isSortByDate,skip,count,categoryId);
    },
    getById(id: number) {
        return productRepository.getById(id);
    },
    update(id: number, data: Partial<ProductInput>) {
        return productRepository.update(id, data);
    },
    delete(id: number) {
        return productRepository.delete(id);
    },
    countProducts(categoryId: number) {
        return productRepository.countProducts(categoryId);
    },
    getSimilar(id:number) {
        return productRepository.getSimilar(id);
    },
};