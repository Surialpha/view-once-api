import { Request, Response } from "express";
import { ResponseModel } from "../models/responseModel";
import messageService from "../services/messageService";

class MessageController {
  public saveMessage(req: Request, res: Response) {
    const value = req.body["message"];
    const response: ResponseModel = messageService.saveMessage(value);
    res.status(response.status).json(response.body);
  }

  public sendMessage(req: Request, res: Response) {
    const id = req.params["id"];
    const response: ResponseModel = messageService.sendMessage(id);
    res.status(response.status).json(response.body);
  }
}

const messageController = new MessageController();

export default messageController;
