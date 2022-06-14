import { UrlConst } from "./../shared/const/UrlConst";
import { Router } from "express";
import messageController from "../controller/messageController";

class IndexRoutes {
  public router: Router;
  private readonly URL_CONST = UrlConst.MessageService

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get(
      this.URL_CONST.getMessage,
      messageController.sendMessage
    );
    this.router.post(
      this.URL_CONST.saveMessage,
      messageController.saveMessage
    );
  }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;
