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
    public async buscarUsua(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscarUsuario(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async buscarListado(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.listadoBuscar(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}


    public async buscarProv(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.busProvincia(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async buscarSolicitud(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscarSolicitud(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async buscaSolicitud(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscaSolicitud(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async buscarDados(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscarAdoptado(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async buscaAdopcionUsu(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.buscarUsuarioAdopcion(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
	}
    public async busqueAnimal(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await animalModel.busquedaAnimal(id);
        if (auto)
            return res.json(auto);
        res.status(404).json({ text: "Auto doesn't exists" });
    
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
    public async buscarId(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.buscarIdAnimal(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
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
    public async busLocalidad(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.busProvin(id);

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
    public async contador(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.contador(id);

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
    public async actualizarSolicitud(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await animalModel.actualizaSolicitud(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}
    public async actualizarUsuari(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await animalModel.actualizarUsuario(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}
    public async modificar(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await animalModel.modificar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}
    public async updateSolicitu(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await animalModel.updateSolicitud(req.body, id);
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
    public async eliminarTodos(req:Request,res:Response){
	
         console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id} = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const { nombre } = req.params;
        const result = await animalModel.eliminarTodos(id,nombre);
        return res.json({ text: 'deleting an auto ' + id });
	}
    public async eliminarInteresa(req:Request,res:Response){
	
         console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await animalModel.eliminarInteresado(id);
        return res.json({ text: 'deleting un interesado' + id });
	}
    public async eliminarAdopcion(req:Request,res:Response){
	
        console.log(req.body);
       //res.send('Usuario '+ req.params.id +' Eliminado!!!');
       const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
       const result = await animalModel.eliminarAdopcion(id);
       return res.json({ text: 'deleting un interesado' + id });
   }
    public async eliminarSolicitud(req:Request,res:Response){
	
        console.log(req.body);
       //res.send('Usuario '+ req.params.id +' Eliminado!!!');
       const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
       const result = await animalModel.eliminarSolicitud(id);
       return res.json({ text: 'deleting un interesado' + id });
   }

    public async agregaAdopcion(req:Request,res:Response)
    {
        const animal = req.body;
        const { id_usuario} = req.body
        const { id_animal} = req.body
        //delete slot.repassword;
        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await animalModel.buscarAdopcion(animal.slot);

        if (!busqueda) {

            const result = await animalModel.crearAdopcion(animal);
            return res.json({ mensaje: 'Slot saved!!' });
        }
        return res.json({ mensaje: 'Slot exists!!' });
      
	}
    public async agregarAdopciones(req:Request,res:Response)
    {
        const animal = req.body;
        const { id_usuario} = req.body
        const { id_animal} = req.body
        //delete slot.repassword;
        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await animalModel.buscarAdopciones(animal.slot);

        if (!busqueda) {

            const result = await animalModel.crearAdopciones(animal);
            return res.json({ mensaje: 'animal saved!!' });
        }
        return res.json({ mensaje: 'animal exists!!' });
      
	}
    public async buscaradop(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const { use } = req.params;
        const usuario = await animalModel.buscaradop(id,use);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
    public async actualizadopcion(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const { nom } = req.params;
        const result = await animalModel.actualiadopcion(req.body, id,nom);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}
    public async actualizaElimina(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const { nom } = req.params;
        const result = await animalModel.actualizaEliminar(req.body, id,nom);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });

	}
    public async agregarSolicitud(req:Request,res:Response)
    {
        const animal = req.body;
        const { id_usuario} = req.body
        const { id_animal} = req.body
        //delete slot.repassword;
        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await animalModel.buscarSolici(animal.slot);

        if (!busqueda) {

            const result = await animalModel.crearSolicitud(animal);
            return res.json({ mensaje: 'animal saved!!' });
        }
        return res.json({ mensaje: 'animal exists!!' });
      
	}
    public async busAdopcione(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await animalModel.busAdopciones(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
	//FIN CRUD

    
}

//Instanciamos el objeto controlador y lo exportamos

const animalController = new AnimalController(); 
export default animalController;