
class MessageService{


        public saveMessage(){
            return 'Save';
        }

        public sendMessage(id: String){
            return 'Send '+id;
        }


}

const messageService = new MessageService();


export default messageService;