import { Request, Response } from 'express';
import slotModel from '../models/slotModel';

class SlotController
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
	public async agregarSlot(req:Request,res:Response)
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

      const slot = req.body;
      //delete slot.repassword;
      console.log(req.body);
      //res.send('Usuario agregado!!!');
      const busqueda = await slotModel.buscarNombre(slot.slot);
      if (!busqueda) {
          const result = await slotModel.crear(slot);
          return res.json({ mensaje: 'Slot saved!!' });
      }
      return res.json({ mensaje: 'Slot exists!!' });
	}
	
	public async listarSlot(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const slot = await slotModel.listar();
       console.log(slot);
       return res.json(slot);
       //res.send('Listado de usuarios!!!');


	}

	public async buscarSlot(req:Request,res:Response)
    {
       
        
        console.log(req.params.id);
        const { id } = req.params;
        const slot = await slotModel.buscarId(id);
        if (slot)
            return res.json(slot);
        res.status(404).json({ text: "Slot doesn't exists" });
       // return res.json({ text: 'buscando ' });
     /*  console.log(req.params.id);
        const { id } = req.params;
        const usuario = await userModel.buscarId(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });*/
	}

	public async actualizarSlot(req:Request,res:Response)
    {
      
        /*console.log(req.body);
        const { id } = req.params;
        const result = await userModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a user ' + id });*/
        //return res.json({ text: 'actualizando' });
        console.log(req.body);
        const { id } = req.params;
        const result = await slotModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a slot ' + id });
	}

	public async eliminarSlot(req:Request,res:Response){
		/*console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminar(id);
        return res.json({ text: 'deleting a user ' + id });*/
      //  return res.json({ text: 'eliminando ' });

         console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await slotModel.eliminar(id);
        return res.json({ text: 'deleting a slot ' + id });
	}
	//FIN CRUD
}

//Instanciamos el objeto controlador y lo exportamos

const slotController = new SlotController(); 
export default slotController;