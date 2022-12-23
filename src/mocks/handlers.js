import { rest } from "msw";
import MOCK from "../data/MOCK";

const url = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7";

export default [
  rest.get(url, (_, res, ctx) => {
    return res(ctx.json(MOCK));
  }),
];
