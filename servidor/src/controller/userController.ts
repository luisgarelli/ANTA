import { Request, Response, text } from 'express';
import userModel from '../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


class UserController
{
	public signin(req:Request,res:Response)
    {
		console.log(req.body);
        res.send('Sign In!!!');
	}

    public async login(req:Request,res:Response)
    {
        const { usuario, password } = req.body; /* hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.*/
        const result = await userModel.buscarNombre(usuario);
        const saltRounds = 10;



        if(result.password == password)
        {
            console.log("CONTRASEÑA CORRECTA");

            const token:string=jwt.sign({_id: result.id},"secretKey");
            res.json({ "login":"ok","mensaje":"Bienvenido ","nombre": result.nombre, token:token, "rol": result.rol, "password": password , "id":result.id});

            return;        
        }
        else{
            console.log("LOS HASH NO COINCIDEN");
            res.send({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});

            return;
        }


        /*
        if(await bcrypt.compare(password, result.password))
        {
            console.log("CONTRASEÑA CORRECTA");

            const token:string=jwt.sign({_id: result.id},"secretKey");
            res.json({ "login":"ok","mensaje":"Bienvenido ","nombre": result.nombre, token:token, "rol": result.rol, "password": password , "id":result.id});

            return;        
        }
        else{
            console.log("LOS HASH NO COINCIDEN");
            res.send({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});

            return;
        }
        */
        console.log(usuario);
        console.log(result);

        /*if (!result)
        {
			res.send({"login":"incorrecto","mensaje":"Usuario no registrado Recibido"});
			return;
		}*/



        /*if (result.nombre == usuario && bcrypt.compare(password, passwordHash, (err, res)){
            if (await bcrypt.compare(result.password, passwordHash)){
                const token:string=jwt.sign({_id: result.id},"secretKey");
                res.json({ "login":"ok","mensaje":"Bienvenido "+result.nombre,token:token, "rol": result.rol, "password": passwordHash});
    
                return;
            }
		}*/
        res.send({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});
	}

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
	public async addUser(req:Request,res:Response)
    {
        const usuario = req.body;
        delete usuario.repassword;
        const saltRounds = 10;

        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await userModel.buscarNombre(usuario.email);

        if (!busqueda)
        {
            console.log('BUSQUEDA PASADA');

            const passwordHash = bcrypt.hash(usuario.password, saltRounds, (err, hash) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(hash);
                //usuario.password=hash;
            });

            //console.log( 'Contraseña encriptada:' + passwordHash);
            //console.log( 'Contraseña ingresada:' + usuario.password);

            //usuario.password = passwordHash

            //console.log( 'Contraseña ingresada:' + usuario.password);

            const result = await userModel.crear(usuario);
            return res.json({ mensaje: 'User saved!!' });
        }

        return res.json({ mensaje: 'User exists!!' });
	}
	
	public async list(req:Request,res:Response)
    {
        console.log(req.body);
        console.log(req.header("Authorization"));//Observamos el valor del token
        const usuarios = await userModel.listar();
        //console.log(usuarios);
        return res.json(usuarios);
        //res.send('Listado de usuarios!!!');
	}
    public async listarSexo(req:Request,res:Response)
    {
       // console.log(req.body);
       /* const usuarios = await userModel.listar();
        console.log(usuarios);
        return res.json(usuarios);*/
       // res.send('Listado de usuarios!!!');
       //return res.json("listando");
       console.log(req.body);
       console.log(req.header("Authorization"));//Observamos el valor del token
       const autos = await userModel.listarSexo();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


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
       const autos = await userModel.listarProvincia();
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
       const autos = await userModel.listarLocalidad();
       console.log(autos);
       return res.json(autos);
       //res.send('Listado de usuarios!!!');


	}
	public async find(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await userModel.buscarId(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
    public async buscar(req:Request,res:Response)
    {
        console.log(req.params.id);
        const { id } = req.params;
        const usuario = await userModel.buscarProvincia(id);

        if (usuario)
        
            return res.json(usuario);

        res.status(404).json({ text: "User doesn't exists" });
	}
   

	public async update(req:Request,res:Response)
    {
        console.log(req.body);
        const { id } = req.params;
        const result = await userModel.actualizar(req.body, id);
        //res.send('Usuario '+ req.params.id +' actualizado!!!');
        return res.json({ text: 'updating a user ' + id });
	}

	public async delete(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminar(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarUsuario(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminar(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarAnimal(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminarAnimales(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarSolicitud(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminarSolicitud(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarAdopcion(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminarAdopcion(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarSolicitudes(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminarUserSolicitudes(id);
        return res.json({ text: 'deleting a user ' + id });
	}
    public async eliminarAdopciones(req:Request,res:Response){
		console.log(req.body);
        //res.send('Usuario '+ req.params.id +' Eliminado!!!');
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminarAdopciones(id);
        return res.json({ text: 'deleting a user ' + id });
	}

	//FIN CRUD
}

//Instanciamos el objeto controlador y lo exportamos

const userController = new UserController(); 
export default userController;