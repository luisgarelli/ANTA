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
const autoModel_1 = __importDefault(require("../models/autoModel"));
class AutoController {
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
    agregaAuto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auto = req.body;
            //delete auto.repassword;
            console.log(req.body);
            const { patente } = req.body;
            const { telefono } = req.body;
            const { descripcion } = req.body;
            //console.log("hola",patente);
            //const pedir:boolean=false;
            const patron = /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/;
            //AA123BB
            const patronTelefono = /^[0-9]{0,11}$/;
            //12345678912 hasta 11 digitos
            const patronDescripcion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]{0,70}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;
            // patron para solo dejar solo 1 espacio entre las palabras y no permite dejar un espacio al final  
            //acepta numeros y letraas
            const busqueda = yield autoModel_1.default.buscarNombre(auto.patente);
            if (!busqueda) {
                if (!patron.test(patente)) {
                    console.log("mal patente");
                    return res.json({ mensaje: 'la patente es equivocada!!' });
                }
                if (!patronTelefono.test(telefono)) {
                    console.log("mal telefono");
                    return res.json({ mensaje: 'el telefono supero los 11 digitos!!' });
                }
                if (!patronDescripcion.test(descripcion)) { // ver longitud
                    console.log("mal descripcion");
                    return res.json({ mensaje: 'la descripcion esta mal!!' });
                }
                else {
                    const result = yield autoModel_1.default.crear(auto);
                    return res.json({ mensaje: 'Auto saved!!' }); //pedir
                }
            }
            return res.json({ mensaje: 'Auto exists!!' });
        });
    }
    listaAuto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield autoModel_1.default.listar();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    buscarAuto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield autoModel_1.default.buscarId(id);
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
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*console.log(req.body);
            const { id } = req.params;
            const result = await userModel.actualizar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a user ' + id });*/
            //return res.json({ text: 'actualizando' });
            console.log(req.body);
            const { id } = req.params;
            const { patente } = req.body;
            const { telefono } = req.body;
            const { descripcion } = req.body;
            //console.log("hola",patente);
            //const pedir:boolean=false;
            const patron = /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/;
            //AA123BB
            const patronTelefono = /^[0-9]{0,11}$/;
            //12345678912 hasta 11 digitos
            const patronDescripcion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]{0,70}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;
            if (!patron.test(patente)) {
                console.log("mal patente");
                return res.json({ mensaje: 'la patente es equivocada!!' });
            }
            if (!patronTelefono.test(telefono)) {
                console.log("mal telefono");
                return res.json({ mensaje: 'el telefono supero los 11 digitos!!' });
            }
            if (!patronDescripcion.test(descripcion)) { // ver longitud
                console.log("mal descripcion");
                return res.json({ mensaje: 'la descripcion esta mal!!' });
            }
            else {
                const result = yield autoModel_1.default.actualizar(req.body, id);
                //res.send('Usuario '+ req.params.id +' actualizado!!!');
                return res.json({ text: 'updating an auto ' + id });
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = await userModel.eliminar(id);
            return res.json({ text: 'deleting a user ' + id });*/
            //  return res.json({ text: 'eliminando ' });
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield autoModel_1.default.eliminar(id);
            return res.json({ text: 'deleting an auto ' + id });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const autoController = new AutoController();
exports.default = autoController;
//# sourceMappingURL=autoController%20copy.js.map