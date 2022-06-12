import {request, response, Router} from  'express';

class IndexRoutes{
    public router: Router;

        constructor(){
            this.router = Router();
        }

        routes(){
            this.router.get('/',(req,res)=> res.send('Home 2'));
        } 

}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;