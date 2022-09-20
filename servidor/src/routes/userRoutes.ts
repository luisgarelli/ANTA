import { Router, Request, Response } from 'express';
import userController from "../controller/userController"; 
import { TokenValidation } from "../lib/verifyToken";

class UserRoutes
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

        this.router.get('/signin',userController.signin);

        //inicio de sesion
        this.router.post('/signin',userController.login);
        
    	//registro
		this.router.post('/signup',userController.addUser);

        //CRUD
		this.router.post('/add',userController.addUser);		
		this.router.get('/list',TokenValidation,userController.list);
		this.router.get('/find/:id',userController.find);
		this.router.get('/busca/:id',userController.buscar);
		this.router.put('/update/:id',TokenValidation,userController.update);
		this.router.delete('/delete/:id',TokenValidation,userController.delete);
		this.router.get('/listar',TokenValidation,userController.listarSexo);
		this.router.get('/listaProvincia',TokenValidation,userController.listarProvincia);
		this.router.get('/listaLocalidad',TokenValidation,userController.listarLocalidad);
		
	}
}

//Exportamos el enrutador con 

const userRoutes = new UserRoutes();
export default userRoutes.router;

//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user