import store from "store2";
import { v4 as uuidv4 } from "uuid";
import { ResponseModel } from "../models/responseModel";

class MessageService {
  public saveMessage(value: String): ResponseModel {
    let response: ResponseModel;
    try {
      const messageID = uuidv4();

      store(messageID, value);
      response = {
        status: 200,
        body: { messageID },
      };
      return response;
    } catch (error) {
      response = {
        status: 500,
        body: { error: "Error, please try again" },
      };
      return response;
    }
  }

  public sendMessage(id: String): ResponseModel {
    let response: ResponseModel;
    try {
      const storeObj = store(id);
      if (storeObj) {
        store(id, "Viewed");
      }
      const message = storeObj ? storeObj : "There is not a message";
      const status = storeObj ? 200 : 404;
      response = {
        status: status,
        body: { message },
      };
      return response;
    } catch (error) {
      response = {
        status: 500,
        body: { error: "Error, please try again" },
      };
      return response;
    }
  }
}

const messageService = new MessageService();

export default messageService;
