import "@kitajs/html/register";
import express, { Express, Request, Response } from "express";
import { testHtmx } from "./views/test";
import { env } from "process";

const app: Express = express();
const port: string = env.PORT || "5173";

app.get("/", (req: Request, res: Response) => {
  res.send(testHtmx);
});

app.listen(port, () => {
  console.log(`[server]: Running at http://localhost:${port}`);
});
