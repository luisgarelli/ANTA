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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autosModel_1 = __importDefault(require("../models/autosModel"));
class AutosController {
    //CRUD
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autos = req.body;
            console.log(req.body);
            //return;
            //res.send('autos agregado!!!');
            const busqueda = yield autosModel_1.default.buscarPatente(autos.patente);
            if (!busqueda) {
                const result = yield autosModel_1.default.crear(autos);
                return res.json({ "save": "ok", "mensaje": 'Auto saved!!' });
            }
            return res.json({ "save": "invalido", "mensaje": 'Auto exists!!' });
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield autosModel_1.default.listar();
            //console.log(autos);
            return res.json(autos);
            //res.send('Listado de autos!!!');
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const autos = yield autosModel_1.default.buscarId(id);
            if (autos)
                return res.json(autos);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            //const { id_auto } = req.params;
            //const result = await autosModel.actualizar(req.body, id_auto);
            ////res.send('autos '+ req.params.id_auto +' actualizado!!!');
            //return res.json({ text: 'updating a Auto ' + id_auto });
            return res.json("modificado");
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            ////res.send('autos '+ req.params.id_auto +' Eliminado!!!');
            //const { id_auto } = req.params; // hacemos detrucsturing y obtenemos el id_auto. Es decir, obtenemos una parte de un objeto JS.
            //const result = await autosModel.eliminar(id_auto);
            //return res.json({ text: 'deleting a Auto ' + id_auto });
            return res.json("borrado");
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const autosController = new AutosController();
exports.default = autosController;
//# sourceMappingURL=autosController.js.map