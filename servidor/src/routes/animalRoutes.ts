import { Router, Request, Response } from 'express';

import { TokenValidation } from "../lib/verifyToken";
import animalController from '../controller/animalController';
class AnimalRoutes
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
		this.router.post('/agregar',TokenValidation,animalController.agregaAnimal);		
		this.router.get('/listar',TokenValidation,animalController.listaAnimal);
		this.router.get('/buscar/:id',TokenValidation,animalController.buscarAnimal);
		this.router.get('/buscusuario/:id',TokenValidation,animalController.buscarUsua);
		this.router.get('/buscadop/:id',TokenValidation,animalController.buscaAdopcionUsu);
		this.router.get('/buscaLocal/:id',TokenValidation,animalController.buscar);
		this.router.get('/buscaRaza/:id',TokenValidation,animalController.buscarRaza);
		this.router.put('/modificar/:id',TokenValidation,animalController.actualizar);
		this.router.get('/busqueda/:id',TokenValidation,animalController.busqueAnimal);
		this.router.delete('/eliminar/:id',TokenValidation,animalController.eliminar);
		this.router.get('/listarSexo',TokenValidation,animalController.listaSexo);
		this.router.get('/listaRaza',TokenValidation,animalController.listarRaza);
		this.router.get('/listaAnimales',TokenValidation,animalController.listarAnimales);
		this.router.get('/listaProvincia',TokenValidation,animalController.listarProvincia);
		this.router.get('/listaLocalidad',TokenValidation,animalController.listarLocalidad);
		this.router.post('/adopcion',TokenValidation,animalController.agregaAdopcion);	
		this.router.get('/busc/:id',TokenValidation,animalController.buscarId);
		this.router.delete('/eliminteresado/:id',TokenValidation,animalController.eliminarInteresa);
		this.router.post('/agregaradopciones',TokenValidation,animalController.agregarAdopciones);	
		this.router.get('/buscardados/:id',TokenValidation,animalController.buscarDados);
		this.router.get('/solicitud/:id',TokenValidation,animalController.buscarSolicitud);
		this.router.put('/modsolicitud/:id',TokenValidation,animalController.modificar);
		this.router.get('/buscaradopciones/:id/:use',TokenValidation,animalController.buscaradop);
		this.router.put('/modsolicitud/:id/:nom',TokenValidation,animalController.actualizadopcion);
		this.router.post('/agregarsolicitud',TokenValidation,animalController.agregarSolicitud);	
		this.router.get('/buscasolicitu/:id',TokenValidation,animalController.buscaSolicitud);	
		this.router.delete('/eliminasolicitud/:id',TokenValidation,animalController.eliminarSolicitud);
		this.router.get('/busadopciones/:id',TokenValidation,animalController.busAdopcione);
		this.router.get('/buscalistado/:id',TokenValidation,animalController.buscarListado);
		this.router.get('/busprovincias/:id',TokenValidation,animalController.buscarProv);
		this.router.get('/buslocali/:id',TokenValidation,animalController.busLocalidad);
		this.router.put('/modifiusuario/:id',TokenValidation,animalController.actualizarUsuari);
		this.router.delete('/eliminatodos/:id/:nombre',TokenValidation,animalController.eliminarTodos);//nuevo
		this.router.put('/actuali/:id/:nom',TokenValidation,animalController.actualizaElimina);//nuevo
		this.router.get('/contador/:id',TokenValidation,animalController.contador);//nuevo


	}
}

//Exportamos el enrutador con 

const animalRoutes = new AnimalRoutes();
export default animalRoutes.router;

//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user