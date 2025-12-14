import { prisma } from "../lib/prisma.js";
import { CreateProductInput } from "./productTypes.js";

export const productRepository = {
  create(data: CreateProductInput) {
    return prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        discount: data.discount,
        quantityLimit: data.quantityLimit,

        images: {
          create: data.images.map((url) => ({
            url,
          })),
        },

        blocks: {
          create: data.blocks.map((block) => ({
            title: block.title,
            description: block.description,
            demo: block.demo,

            parameters: {
              create: block.parameters.map((param) => ({
                key: param.key,
                value: param.value,
              })),
            },
          })),
        },
      },

      include: {
        images: true,
        blocks: {
          include: {
            parameters: true,
          },
        },
      },
    });
  },
};
