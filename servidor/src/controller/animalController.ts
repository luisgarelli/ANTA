import { Request, Response } from 'express';

import animalModel from '../models/animalModel';
class AnimalController
{
    /*public addUser(req:Request,res:Response){
		console.log(req.body);
        console.log("Usuario: " , req.body.usuario);
        console.log("Password: " , req.body.password);		
		console.log("email: " , req.body.email);
		console.log("Rol: " , req.body.rol);
        //res.send('Datos recibidos!!!');
        res.send({"Recibido":req.body});

	}*/

    //CRUD
	public async agregaAnimal(req:Request,res:Response)
    {
        const animal = req.body;
        //delete slot.repassword;
        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await animalModel.buscarNombre(animal.slot);
        if (!busqueda) {
            const result = await animalModel.crear(animal);
            return res.json({ mensaje: 'Slot saved!!' });
        }
        return res.json({ mensaje: 'Slot exists!!' });
      
	}
   
	
	public async listaAnimal(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listar();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
    public async listaSexo(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listarSexo();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
    public async listarRaza(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listarRaza();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
    public async listarAnimales(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listarAnimales();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}

	public async buscarAnimal(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscarId(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
       // return res.json({ text: 'buscando ' });
     /*  console.log(req.params.id);
        const { id } = req.params;
        const usuario = await userModel.buscarId(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });*/
	}

    public async listarProvincia(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listarProvincia();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
   
    
    public async listarLocalidad(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await animalModel.listarLocalidad();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
    public async buscar(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.buscarProvincia(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
    public async buscarRaza(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.buscarRaza(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
	public async actualizar(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await animalModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}

	public async eliminar(req:Request,res:Response){
		/*console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminar(id);
        return res.json({ text: 'deleting a user ' + id });*/
      //  return res.json({ text: 'eliminando ' });

         console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await animalModel.eliminar(id);
        return res.json({ text: 'deleting an auto ' + id });
	}
	//FIN CRUD

    
}

//Instanciamos el objeto controlador y lo exportamos

const animalController = new AnimalController(); 
export default animalController;