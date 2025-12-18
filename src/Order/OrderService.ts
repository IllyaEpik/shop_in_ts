

import { CreateOrderInput, IServiceContract } from "./OrderTypes";
import { orderRepository } from "./OrderRepository";

export const orderService:IServiceContract = {
  create(data) {
    return orderRepository.create(data);
  },
};
