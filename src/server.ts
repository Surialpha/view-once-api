import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";

import IndexRoutes from "./routes/indexRoutes";
import corsConfig from "./shared/config/corsConfig";

class Server {
  public app: express.Application;
  public redisClient: any;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set("port", process.env.PORT || 9669);
    //Middelwares
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.all('*', corsConfig.setConfig);
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
  }

  async start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
