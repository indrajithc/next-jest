import { scoopsHandlers } from "./api/scoops";
import { toppingsHandlers } from "./api/toppings";

export const handlers = [...scoopsHandlers, ...toppingsHandlers];
