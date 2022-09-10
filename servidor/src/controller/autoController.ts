import { Request, Response } from 'express';
import autoModel from '../models/autoModel';

class AutoController
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
	public async agregaAuto(req:Request,res:Response)
    {
        

      const auto = req.body;
      //delete auto.repassword;
      console.log(req.body);
      const { patente } = req.body
      const { telefono } = req.body
      const { descripcion } = req.body
      //console.log("hola",patente);
      //const pedir:boolean=false;
      const patron=/^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/;
      //AA123BB
      const patronTelefono=/^[0-9]{0,11}$/;
      //12345678912 hasta 11 digitos
      const patronDescripcion=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]{0,70}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;
      // patron para solo dejar solo 1 espacio entre las palabras y no permite dejar un espacio al final  
     //acepta numeros y letraas

        const busqueda = await autoModel.buscarNombre(auto.patente);
        if (!busqueda) {
            if(!patron.test(patente)){
                console.log("mal patente");
                return res.json({ mensaje: 'la patente es equivocada!!' });
            }
            if(!patronTelefono.test(telefono)){
                console.log("mal telefono");
                return res.json({ mensaje: 'el telefono supero los 11 digitos!!' });
            }
            if(!patronDescripcion.test(descripcion)){// ver longitud
                console.log("mal descripcion");
                return res.json({ mensaje: 'la descripcion esta mal!!' });
            }
            else{
            const result = await autoModel.crear(auto);
            return res.json({ mensaje: 'Auto saved!!' });//pedir
            }
            
        }
        return res.json({ mensaje: 'Auto exists!!' });
      
	}
   
	
	public async listaAuto(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await autoModel.listar();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}

	public async buscarAuto(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const auto = await autoModel.buscarId(id);
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
        const { patente } = req.body
        const { telefono } = req.body
        const { descripcion } = req.body
        //console.log("hola",patente);
        //const pedir:boolean=false;
        const patron=/^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/;
        //AA123BB
        const patronTelefono=/^[0-9]{0,11}$/;
        //12345678912 hasta 11 digitos
        const patronDescripcion=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]{0,70}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;

        if(!patron.test(patente)){
            console.log("mal patente");
            return res.json({ mensaje: 'la patente es equivocada!!' });
        }
        if(!patronTelefono.test(telefono)){
            console.log("mal telefono");
            return res.json({ mensaje: 'el telefono supero los 11 digitos!!' });
        }
        if(!patronDescripcion.test(descripcion)){// ver longitud
            console.log("mal descripcion");
            return res.json({ mensaje: 'la descripcion esta mal!!' });
        }
        else{
        const result = await autoModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating an auto ' + id });
        }

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
        const result = await autoModel.eliminar(id);
        return res.json({ text: 'deleting an auto ' + id });
	}
	//FIN CRUD

    
}

//Instanciamos el objeto controlador y lo exportamos

const autoController = new AutoController(); 
export default autoController;