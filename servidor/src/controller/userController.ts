import { Request, Response } from 'express';
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

        /*const passwordHash: any = async () =>
        {
            const hash = await bcrypt.hash(password, saltRounds)
            console.log("Hash generado: ",hash)
            //console.log(await bcrypt.compare(password, hash))
        }*/
          
        /*bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(hash);
        });*/

        if(await bcrypt.compare(password, result.password))
        {
            console.log("CONTRASEÑA CORRECTA");

            const token:string=jwt.sign({_id: result.id},"secretKey");
            res.json({ "login":"ok","mensaje":"Bienvenido "+result.nombre,token:token, "rol": result.rol, "password": password});

            return;        
        }
        else{
            console.log("LOS HASH NO COINCIDEN");
            res.send({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});
        }

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

        const user = req.body;
        //delete slot.repassword;
        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await userModel.buscarNombre(user.slot);
        if (!busqueda) {
            const result = await userModel.crear(user);
            return res.json({ mensaje: 'user saved!!' });
        }
        return res.json({ mensaje: 'user exists!!' });
      /*  const saltRounds = 10;

        console.log(req.body);
        //res.send('Usuario agregado!!!');
        const busqueda = await userModel.buscarNombre(usuario.nombre);

        if (!busqueda)
        {
            const passwordHash = bcrypt.hash(usuario.password, saltRounds, (err, hash) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(hash);
            });
            usuario.password = passwordHash
            const result = await userModel.crear(usuario);
            return res.json({ mensaje: 'User saved!!' });
        }

        return res.json({ mensaje: 'User exists!!' });*/

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
	//FIN CRUD
}

//Instanciamos el objeto controlador y lo exportamos

const userController = new UserController(); 
export default userController;