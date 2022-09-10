import { Router, Request, Response } from 'express';
import autoController from '../controller/autoController';
import { TokenValidation } from "../lib/verifyToken";

class AutosRoutes
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
		this.router.post('/agregar',TokenValidation,autoController.agregaAuto);		
		this.router.get('/listar',TokenValidation,autoController.listaAuto);
		this.router.get('/buscar/:id',TokenValidation,autoController.buscarAuto);
		this.router.put('/modificar/:id',TokenValidation,autoController.actualizar);
		this.router.delete('/eliminar/:id',TokenValidation,autoController.eliminar);
	}
}

//Exportamos el enrutador con 

const autosRoutes = new AutosRoutes();
export default autosRoutes.router;

//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user