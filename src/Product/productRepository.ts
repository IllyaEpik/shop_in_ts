
import prisma from "../db/prismaDB";
import { CreateProductInput, CreateProductInputWithCategory, ProductInput } from "./productTypes";

// prisma
// const prisma = new PrismaClient();
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
    
    update(id: number, data: ProductInput) {
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
