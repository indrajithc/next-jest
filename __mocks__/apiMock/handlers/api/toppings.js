import { rest } from "msw";

export const toppingsHandlers = [
  rest.get("http://localhost:3030/api/v1/toppings", (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "Cherries",
          imagePath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/800px-Cherry_season_%2848216568227%29.jpg",
        },
        {
          name: "M&Ms",
          imagePath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Plain-M%26Ms-Pile.jpg/1280px-Plain-M%26Ms-Pile.jpg",
        },
        {
          name: "Hot fudge",
          imagePath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Handmade_fruit_fudge_squares.jpg/1280px-Handmade_fruit_fudge_squares.jpg",
        },
      ])
    )
  ),
];

export const dummy = null;
