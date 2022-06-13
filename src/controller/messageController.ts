import {Request, Response} from  'express';
import messageService from '../services/messageService'

class MessageController{


        public saveMessage(req: Request, res: Response){
            
            const message = req.body.message;
            
            return res.send(messageService.saveMessage(message));
        }

        public sendMessage(req: Request, res: Response){
            const id = req.params['id']
            return res.send(messageService.sendMessage(id))
        }


}

const messageController = new MessageController();


export default messageController;