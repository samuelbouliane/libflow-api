import express, { Express, Request, Response } from "express";
import { env } from "process";

const app: Express = express();
const port: string = env.PORT || "5173";

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>Welcome to the TypeScript Node Server</h1>
    <button>Click me</button>
  `);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
