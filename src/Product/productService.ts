import { productRepository } from "./productRepository.js";
import { CreateProductInput } from "./productTypes.js";
export default {
    create(data: CreateProductInput) {
        return productRepository.create(data);
    },
};
