import "@kitajs/html/register";
import express, { Express, Request, Response } from "express";
import { registerRoutes } from "./utils/registerRoutes";
import { readFileSync } from "fs";
import { env } from "process";

const app: Express = express();
const port: string = env.PORT || "5173";

const routes = ["foo"];

async function start() {
  const page = readFileSync("./src/index.html", "utf8");

  app.get("/", (req: Request, res: Response) => {
    res.send(
      page.replace("{{body}}", require("./routes/index").default.toString())
    );
  });

  await registerRoutes("./routes", routes, app);
}

app.listen(port, async () => {
  await start();
  console.log(`[server]: Running at http://localhost:${port}`);
});
