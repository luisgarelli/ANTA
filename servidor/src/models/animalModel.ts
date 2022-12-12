import { createPool } from 'mysql2/promise';

class AnimalModel
{
	private db: any;

	constructor()
    {
		this.config(); //aplicamos la conexion con la BD.
	
	}
	
	async config()
    { //Parametro de conexion con la BD.
	
		this.db = await createPool
        ({
		
            host: 'localhost',
			port:33065,
            user: 'root',
            password: '',
            database: 'estacionamiento',
            connectionLimit: 10
		});
	}

    async listar()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible"   ');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}
	async listarSexo()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM sexo');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}
	async listarRaza()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM raza');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}
	async listarAnimales()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM animales');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}

	//Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
	//Si no la encuentra devuelve null
	async buscarId(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE id = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}

	//Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
	//Si no la encuentra devuelve null
	async buscarNombre(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE nombre = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}

	//Devuelve 1 si logro crear un nuevo usuario de la tabla usuarios
	async crear(usuario: object)
    {
		const result = (await this.db.query('INSERT INTO animal SET ?', [usuario]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async crearAdopcion(usuario: object)
    {
		const result = (await this.db.query('INSERT INTO adopcion SET ?', [usuario]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async crearAdopciones(usuario: object)
    {
		const result = (await this.db.query('INSERT INTO adopciones SET ?', [usuario]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async buscarAdopcion(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async buscarUsuarioAdopcion(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async buscarAdopciones(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopciones WHERE id_animal = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async buscarIdAnimal(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async buscarSolicitud(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopcion WHERE id_registrado = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async buscaSolicitud(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM solicitud WHERE id_usuario = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async buscarUsuario(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		//const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario = ?', [nombre]);
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async listadoBuscar(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario != ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		//const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario = ?', [nombre]);
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async buscarAdoptado(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Adoptado" AND id_usuario = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		//const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario = ?', [nombre]);
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async busquedaAnimal(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM animal WHERE id = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	

	//Devuelve 1 si logro actualizar el usuario indicado por id
	async actualizar(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE animal SET ? WHERE id = ?', [usuario, id]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async actualizarUsuario(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async modificar(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE adopcion SET ? WHERE id_registrado  = ?', [usuario, id]))[0].affectedRows;
		console.log(result);

		return result;
	}

	//Devuelve 1 si logro eliminar el usuario indicado por id
	async eliminar(id: string)
    {
		const user = (await this.db.query('DELETE FROM animal WHERE id = ?', [id]))[0].affectedRows;
		console.log(user);
        
		return user;
	}
	async eliminarInteresado(id: string)
    {
		const user = (await this.db.query('DELETE FROM adopcion WHERE id_registrado = ?', [id]))[0].affectedRows;
		console.log(user);
        
		return user;
	}
	async listarLocalidad()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM localidades');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}
	async listarProvincia()
    { //Devuelve todas las filas de la tabla usuario
		//const db=this.connection;
		const usuarios = await this.db.query('SELECT * FROM provincias');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}
	async buscarProvincia(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM localidades WHERE id_privincia = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async busProvin(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM localidades WHERE id = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async buscarRaza(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM raza WHERE codigo_animal = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0];

		return null;
	}
	async buscaradop(nombre: string,nom: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopcion WHERE  id_registrado = ? AND id_animal = ?', [nombre,nom]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		//const encontrado: any = await this.db.query('SELECT * FROM animal WHERE estado = "Disponible" AND id_usuario = ?', [nombre]);
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async actualiadopcion(usuario: object, id: string,nom:string)
    {
		const result = (await this.db.query('UPDATE solicitud SET ?  WHERE id_animal = ? AND id_usuario = ?', [usuario, id,nom]))[0].affectedRows;
		console.log(result);

		return result;
	}

	async updateSolicitud(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE solicitud SET ?  WHERE id_registrado = ? ', [usuario, id]))[0].affectedRows;
		console.log(result);

		return result;
	}
	
	async actualizaEliminar(usuario: object, id: string,nom:string)
    {
		const result = (await this.db.query('UPDATE solicitud SET ? WHERE id_usuario != ? AND id_animal = ?', [ usuario,id,nom]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async crearSolicitud(usuario: object)
    {
		const result = (await this.db.query('INSERT INTO solicitud SET ?', [usuario]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async buscarSolici(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM solicitud WHERE id = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async eliminarSolicitud(id: string)
    {
		const user = (await this.db.query('DELETE FROM solicitud WHERE id = ?', [id]))[0].affectedRows;
		console.log(user);
        
		return user;
	}
	async busAdopciones(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM adopciones WHERE id_animal = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async busProvincia(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM provincias WHERE id = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}
	async eliminarTodos(id: string, nombre:string)
    {
		const user = (await this.db.query('DELETE FROM adopcion WHERE id_registrado != ? AND id_animal = ?', [id,nombre]))[0].affectedRows;
		console.log(user);
        
		return user;
	}
	async contador(id: string)
    {
		const encontrado: any = await this.db.query('Select count (*) from adopcion WHERE id_animal = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
		if (encontrado.length > 1)

		return encontrado[0][0];

	return null;
	}

	async actualizaSolicitud(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE solicitud SET ? WHERE id_animal = ?', [ usuario,id]))[0].affectedRows;
		console.log(result);

		return result;
	}
	async eliminarAdopcion(id: string)
    {
		const user = (await this.db.query('DELETE FROM adopcion WHERE id_animal = ?', [id]))[0].affectedRows;
		console.log(user);
        
		return user;
	}
	
	
}

//Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.

//Exportamos el objeto userModel con 

const animalModel: AnimalModel = new AnimalModel();
export default animalModel;