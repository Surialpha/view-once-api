import { v4 as uuidv4 } from 'uuid';


class MessageService{


        public saveMessage(message: String){

            const messageID = uuidv4();
            
            const storedMessage = {
                message: message,
                messageID: messageID,
            };

            return {"messageID": messageID};
        }

        public sendMessage(id: String){
            return 'Send '+id;
        }


}

const messageService = new MessageService();


export default messageService;