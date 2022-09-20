import { Request, Response } from 'express';
import historialModel from '../models/historialModel';

class HistorialController
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
	public async agregarHistorial(req:Request,res:Response)
    {
        /*const usuario = req.body;
        delete usuario.repassword;
        console.log(req.body);
        res.send('Usuario agregado!!!');*/
       /* const busqueda = await userModel.buscarNombre(usuario.nombre);

        if (!busqueda)
        {
            const result = await userModel.crear(usuario);
            return res.json({ mensaje: 'User saved!!' });
        }

        return res.json({ mensaje: 'User exists!!' });*/
      //  return res.json({ text: 'agregando ' });

      const auto = req.body;
      //delete auto.repassword;
      console.log(req.body);
      //res.send('Usuario agregado!!!');
      const busqueda = await historialModel.buscarNombre(auto.patente);
      if (!busqueda) {
          const result = await historialModel.crear(auto);
          return res.json({ mensaje: 'Auto saved!!' });
      }
      return res.json({ mensaje: 'Auto exists!!' });
	}
	
	public async listarHistorial(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await historialModel.listar();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');
	}

    public async listarTablas(req:Request,res:Response)
    {
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const filas = await historialModel.vincularTablas();
       console.log(filas);
       return res.json(filas);
       //res.send('Listado de usuarios!!!');
	}

	public async buscarHistorial(req:Request,res:Response)
    {
       
        
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await historialModel.buscarId(id);
        if (usuario)
            return res.json(usuario);
        res.status(404).json({ text: "Auto doesn't exists" });
       // return res.json({ text: 'buscando ' });
     /*  console.log(req.params.id);
        const { id } = req.params;
        const usuario = await userModel.buscarId(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });*/
	}

	public async actualizar(req:Request,res:Response)
    {
      
        /*console.log(req.body);
        const { id } = req.params;
        const result = await userModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a user ' + id });*/
        //return res.json({ text: 'actualizando' });
        console.log(req.body);
        const { id } = req.params;
        const result = await historialModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating an auto ' + id });
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
        const result = await historialModel.eliminar(id);
        return res.json({ text: 'deleting an auto ' + id });
	}
	//FIN CRUD
}

//Instanciamos el objeto controlador y lo exportamos

const historialController = new HistorialController(); 
export default historialController;