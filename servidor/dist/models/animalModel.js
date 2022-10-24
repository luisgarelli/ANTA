"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
class AnimalModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                host: 'localhost',
                port: 33065,
                user: 'root',
                password: '',
                database: 'estacionamiento',
                connectionLimit: 10
            });
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM animal');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    listarSexo() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM sexo');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    listarRaza() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM raza');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    listarAnimales() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM animales');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
    //Si no la encuentra devuelve null
    buscarId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM animal WHERE id = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
    //Si no la encuentra devuelve null
    buscarNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM animal WHERE nombre = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear un nuevo usuario de la tabla usuarios
    crear(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO animal SET ?', [usuario]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    crearAdopcion(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO adopcion SET ?', [usuario]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    crearAdopciones(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO adopciones SET ?', [usuario]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    buscarAdopcion(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    buscarUsuarioAdopcion(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0];
            return null;
        });
    }
    buscarAdopciones(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM adopciones WHERE id_animal = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    buscarIdAnimal(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM adopcion WHERE id_animal = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    buscarUsuario(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM animal WHERE id_usuario = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0];
            return null;
        });
    }
    busquedaAnimal(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM animal WHERE id = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizar(usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE animal SET ? WHERE id = ?', [usuario, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.db.query('DELETE FROM animal WHERE id = ?', [id]))[0].affectedRows;
            console.log(user);
            return user;
        });
    }
    eliminarInteresado(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.db.query('DELETE FROM adopcion WHERE id_registrado = ?', [id]))[0].affectedRows;
            console.log(user);
            return user;
        });
    }
    listarLocalidad() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM localidades');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    listarProvincia() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const usuarios = yield this.db.query('SELECT * FROM provincias');
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios[0];
        });
    }
    buscarProvincia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM localidades WHERE id_privincia = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0];
            return null;
        });
    }
    buscarRaza(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM raza WHERE codigo_animal = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0];
            return null;
        });
    }
}
//Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.
//Exportamos el objeto userModel con 
const animalModel = new AnimalModel();
exports.default = animalModel;
//# sourceMappingURL=animalModel.js.map