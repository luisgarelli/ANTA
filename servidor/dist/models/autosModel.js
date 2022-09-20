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
class AutosModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                host: 'localhost',
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
            const auto = yield this.db.query('SELECT * FROM auto');
            //console.log(auto[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return auto[0];
        });
    }
    //Devuelve un objeto cuya fila en la tabla auto coincide con id.
    //Si no la encuentra devuelve null
    buscarId(id_auto) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM auto WHERE id_auto = ?', [id_auto]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla auto coincide con patente.
    //Si no la encuentra devuelve null
    buscarPatente(patente) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM auto WHERE patente = ?', [patente]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear un nuevo usuario de la tabla auto
    crear(autos) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO auto SET ?', [autos]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizar(usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE auto SET ? WHERE id_auto = ?', [usuario, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.db.query('DELETE FROM auto WHERE id_auto = ?', [id]))[0].affectedRows;
            console.log(user);
            return user;
        });
    }
}
//Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.
//Exportamos el objeto AutosModel con 
const autosModel = new AutosModel();
exports.default = autosModel;
//# sourceMappingURL=autosModel.js.map