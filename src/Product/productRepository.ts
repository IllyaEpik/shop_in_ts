
import prisma from "../db/prismaDB";
import { ProductInput } from "./productTypes";

// prisma
// const prisma = new PrismaClient();
export const productRepository = {
    create(data: ProductInput) {
        return prisma.product.create({ data });
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
