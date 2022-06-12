import { Router } from "express";
import messageController from "../controller/messageController";

class IndexRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/message/:id", messageController.sendMessage);
    this.router.post("/message", messageController.saveMessage);
  }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;
