import prisma from "../db/prismaDB";
import { CreateOrderInput, IRepositoryContract } from "./OrderTypes";

export const orderRepository:IRepositoryContract = {
    create: async (data) => {
        const time = new Date();
        const orderItems = []
        const order = await prisma.order.create({
            data:{
                createdAt:time
            }
        })
        const dataWithOrder = data.map((product)=>{
            return {
                productId:product.id,
                quantity:product.count,
                orderId:order.id
            }
        })
        const orderItem = await prisma.orderItem.createMany({
            data: dataWithOrder
        })
        //
        
        return order
        // return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        // let totalPrice = 0;


        // const products: Product[] = await tx.product.findMany({
        //     where: {
        //     id: {
        //         in: data.items.map((item) => item.productId),
        //     },
        //     },
        // });


        // for (const item of data.items) {
        //     const product = products.find(
        //     (p) => p.id === item.productId
        //     );

        //     if (!product) {
        //     throw new Error(`Product ${item.productId} not found`);
        //     }

        //     if (product.quantity_limit < item.quantity) {
        //     throw new Error(
        //         `Not enough quantity for product: ${product.name}`
        //     );
        //     }

        //     const priceWithDiscount =
        //     product.price -
        //     (product.price * product.discount) / 100;

        //     totalPrice += priceWithDiscount * item.quantity;
        // }


        // const order = await tx.order.create({
        //     data: {
        //     deliveryStatus: "COLLECTED",

        //     items: {
        //         create: data.items.map((item) => {
        //         const product = products.find(
        //             (p) => p.id === item.productId
        //         )!;

        //         const unitPrice =
        //             product.price -
        //             (product.price * product.discount) / 100;

        //         return {
        //             productId: product.id,
        //             quantity: item.quantity,
        //             unitPriceAtPurchase: unitPrice,
        //         };
        //         }),
        //     },
        //     },
        //     include: {
        //     items: true,
        //     },
        // });
        // for (const item of data.items) {
        //     await tx.product.update({
        //     where: { id: item.productId },
        //     data: {
        //         quantity_limit: {
        //         decrement: item.quantity,
        //         },
        //     },
        //     });
        // }

        // return order;
        // });
    },
};  