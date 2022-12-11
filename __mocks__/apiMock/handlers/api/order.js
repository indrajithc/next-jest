import { rest } from "msw";

const host = "http://localhost:3030";
const version = "/api/v1";

export const orderHandlers = [
  rest.post(`${host}${version}/order`, (req, res, ctx) =>
    res(
      ctx.json({
        orderNumber: 123456,
      })
    )
  ),
];

export const orderHandlerError500 = rest.get(
  `${host}${version}/order`,
  (req, res, ctx) => res(ctx.status(500))
);
