import store from "store2";
import { v4 as uuidv4 } from "uuid";
import { ResponseModel } from "../models/responseModel";
import { ApiLabelsConstant } from "../shared/const/ApiLabelConst";

class MessageService {

  private readonly API_LABELS_CONST = ApiLabelsConstant

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
        body: { error: this.API_LABELS_CONST.Error.defaultError },
      };
      return response;
    }
  }

  public sendMessage(id: String): ResponseModel {
    let response: ResponseModel;
    try {
      const storeObj = store(id);
      if (storeObj) {
        store(id, this.API_LABELS_CONST.SendMessage.viewed);
      }
      const message = storeObj ? storeObj : this.API_LABELS_CONST.SendMessage.notAMessage;
      const status = storeObj ? 200 : 404;
      response = {
        status: status,
        body: { message },
      };
      return response;
    } catch (error) {
      response = {
        status: 500,
        body: { error: this.API_LABELS_CONST.Error.defaultError },
      };
      return response;
    }
  }
}

const messageService = new MessageService();

export default messageService;
