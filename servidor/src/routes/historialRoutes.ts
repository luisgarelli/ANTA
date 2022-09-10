import { Router, Request, Response } from 'express';
import historialController from '../controller/historialController';
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

		this.router.get('/listar-historial',TokenValidation,historialController.listarTablas);
        //CRUD
		this.router.post('/agregar',TokenValidation,historialController.agregarHistorial);		
		this.router.get('/listar',TokenValidation,historialController.listarHistorial);
		this.router.get('/buscar/:id',TokenValidation,historialController.buscarHistorial);
		this.router.put('/modificar/:id',TokenValidation,historialController.actualizar);
		this.router.delete('/eliminar/:id',TokenValidation,historialController.eliminar);
	}
}

//Exportamos el enrutador con 

const autosRoutes = new AutosRoutes();
export default autosRoutes.router;

//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user