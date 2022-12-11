import { scoopsHandlers } from "./api/scoops";
import { toppingsHandlers } from "./api/toppings";
import { orderHandlers } from "./api/order";

export const handlers = [
  ...scoopsHandlers,
  ...toppingsHandlers,
  ...orderHandlers,
];
