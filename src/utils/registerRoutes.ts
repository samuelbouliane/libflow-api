import type { Express, Request, Response } from "express";

async function registerRoutes(
  basePath: string,
  routes: string[],
  app: Express
) {
  routes.forEach((routePath) => {
    const handler = require(`../${basePath}/${routePath}/index`);

    app.get(`/${routePath}`, (req: Request, res: Response) => {
      res.send(handler.default.toString());
    });
  });
}

export { registerRoutes };
