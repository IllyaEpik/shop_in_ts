import prisma from "../db/prismaDB";
import { ProductInput } from "./productTypes";

export const productRepository = {
    create(data: ProductInput) {
        return prisma.product.create({ data });
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