import { Router, Request, Response } from 'express';
import slotController from '../controller/slotController';
import { TokenValidation } from "../lib/verifyToken";

class SlotRoutes
{
	public router: Router = Router();
	constructor()
    {
		this.config();
	}
    
	config(): void
    {
		this.router.get('/',(req:Request,res:Response)=>
        {
            res.send('Main!!!');
        });

        /*this.router.get('/signin',(req:Request,res:Response)=> 
        {
            res.send('Sign In!!!');
        });*/

       /* this.router.get('/signin',userController.signin);

        //inicio de sesion
        this.router.post('/signin',userController.login);
        
    	//registro
		this.router.post('/signup',userController.addUser);*/

        //CRUD
		this.router.post('/agrega',TokenValidation,slotController.agregarSlot);		
		this.router.get('/lista',TokenValidation,slotController.listarSlot);
		this.router.get('/busca/:id',TokenValidation,slotController.buscarSlot);
		this.router.put('/modifica/:id',TokenValidation,slotController.actualizarSlot);
		this.router.delete('/elimina/:id',TokenValidation,slotController.eliminarSlot);
	}
}

//Exportamos el enrutador con 

const slotRoutes = new SlotRoutes();
export default slotRoutes.router;

//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user