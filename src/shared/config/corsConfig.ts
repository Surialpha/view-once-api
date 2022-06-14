import { NextFunction, Request, Response } from "express";

class CorsConfig {
  public setConfig(req: Request, res: Response, next: NextFunction) {
    //TODO: Change the Access-Control-Allow-Origin value from * to the site that will consume the API
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      ['GET', 'POST']
    );
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }
}

const corsConfig = new CorsConfig();

export default corsConfig;
