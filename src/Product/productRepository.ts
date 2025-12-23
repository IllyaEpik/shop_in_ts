import prisma from "../db/prismaDB";
import { CreateProductInput, CreateProductInputWithCategory, ProductInput } from "./productTypes";

export const productRepository = {
    create(data: CreateProductInputWithCategory) {
        const { categoryId, ...other } = data;
        return prisma.product.create({
            data: {
                ...other,
                category: { connect: { id: categoryId } }
            }
        });
    },
    getAll() {
        return prisma.product.findMany();
    },
    
    getOne(id: number) {
        return prisma.product.findUnique({ where: { id } });
    },
    update(id: number, data: Partial<ProductInput>) {
        return prisma.product.update({
            where: { id },
            data,
        });
    },
    delete(id: number) {
        return prisma.product.delete({
            where: { id },
        });
    },
};