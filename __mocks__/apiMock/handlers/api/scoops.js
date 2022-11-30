import { rest } from "msw";

export const scoopsHandlers = [
  rest.get("http://localhost:3030/api/v1/scoops", (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath:
            "https://cdn.shopify.com/s/files/1/0474/0038/6728/products/ChocoVanillaFudge_1000x.jpg?v=1656398631",
        },
        {
          name: "Vanilla",
          imagePath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Vanilla_planifolia_%286998639597%29.jpg/640px-Vanilla_planifolia_%286998639597%29.jpg",
        },
      ])
    )
  ),
];

export const dummy = null;
