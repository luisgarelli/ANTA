import { createPool } from 'mysql2/promise';

class HistorialModel
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
		const usuarios = await this.db.query('SELECT * FROM estaciona_en');
		//console.log(usuarios[0]);
		//devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
		return usuarios[0];
	}

	//Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
	//Si no la encuentra devuelve null
	async buscarId(id: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM estaciona_en WHERE id = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}

	//Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
	//Si no la encuentra devuelve null
	async buscarNombre(nombre: string)
    {
		const encontrado: any = await this.db.query('SELECT * FROM estaciona_en WHERE auto_id = ?', [nombre]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		
        if (encontrado.length > 1)

			return encontrado[0][0];

		return null;
	}

	//Devuelve 1 si logro crear un nuevo usuario de la tabla usuarios
	async crear(usuario: object)
    {
		const result = (await this.db.query('INSERT INTO estaciona_en SET ?', [usuario]))[0].affectedRows;
		console.log(result);

		return result;
	}

	//Devuelve 1 si logro actualizar el usuario indicado por id
	async actualizar(usuario: object, id: string)
    {
		const result = (await this.db.query('UPDATE estaciona_en SET ? WHERE id = ?', [usuario, id]))[0].affectedRows;
		console.log(result);

		return result;
	}

	//Devuelve 1 si logro eliminar el usuario indicado por id
	async eliminar(id: string)
    {
		const user = (await this.db.query('DELETE FROM estaciona_en WHERE id = ?', [id]))[0].affectedRows;
		console.log(user);
        
		return user;
	}

	async vincularTablas()
	{
		const filas = await this.db.query('SELECT patente, telefono, auto.descripcion, slot, f_inicial, f_final FROM auto JOIN estaciona_en on id_auto=auto_id JOIN slot on slot_id=id_slot;');

		return filas[0];
	}
}

//Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.

//Exportamos el objeto userModel con 

const historialModel: HistorialModel = new HistorialModel();
export default historialModel;