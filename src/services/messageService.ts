import store from "store2";
import { v4 as uuidv4 } from "uuid";
import { ResponseModel } from "../models/responseModel";
import { ApiLabelsConstant } from "../shared/const/ApiLabelConst";
import * as CryptoJS from "crypto-js";

class MessageService {
  private readonly API_LABELS_CONST = ApiLabelsConstant;
  private readonly SECRET = process.env.SECRET_SALT || uuidv4();

  public saveMessage(value: String): ResponseModel {
    let response: ResponseModel;
    try {
      const messageID = uuidv4();

      const encrypt = this.encryptMessages(value);

      store(messageID, encrypt);

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
      const status = storeObj ? 200 : 404;
      if (storeObj) {
        store.remove(id);
      } else {
        return (response = {
          status: status,
          body: { message: this.API_LABELS_CONST.SendMessage.viewed },
        });
      }

      const bytes = CryptoJS.AES.decrypt(storeObj, this.SECRET);

      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      const message = storeObj
        ? decryptedData
        : this.API_LABELS_CONST.SendMessage.notAMessage;

      response = {
        status: status,
        body: { message },
      };
      return response;
    } catch (error) {
      console.log("error", error);
      response = {
        status: 500,
        body: { error: this.API_LABELS_CONST.Error.defaultError },
      };
      return response;
    }
  }

  private encryptMessages(message: String): String {
    return CryptoJS.AES.encrypt(message.toString(), this.SECRET).toString();
  }
}

const messageService = new MessageService();

export default messageService;
