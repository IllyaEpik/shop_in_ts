

import { CreateOrderInput } from "./OrderTypes";
import { orderRepository } from "./OrderRepository";

export const orderService = {
  create(data: CreateOrderInput) {
    return orderRepository.create(data);
  },
};
