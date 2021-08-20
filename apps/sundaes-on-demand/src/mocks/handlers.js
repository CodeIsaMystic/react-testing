import { rest } from "msw"

export const handlers = [
  rest.get("http://localhost/3030/scoops", (req, res, cts) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "images/chocolate.png" },
        { name: "Vanilla", imagePath: "images/vanilla.png" },
      ])
    )
  }),
]
