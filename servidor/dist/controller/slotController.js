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
const slotModel_1 = __importDefault(require("../models/slotModel"));
class SlotController {
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
    agregarSlot(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const busqueda = yield slotModel_1.default.buscarNombre(slot.slot);
            if (!busqueda) {
                const result = yield slotModel_1.default.crear(slot);
                return res.json({ mensaje: 'Slot saved!!' });
            }
            return res.json({ mensaje: 'Slot exists!!' });
        });
    }
    listarSlot(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const slot = yield slotModel_1.default.listar();
            console.log(slot);
            return res.json(slot);
            //res.send('Listado de usuarios!!!');
        });
    }
    buscarSlot(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const slot = yield slotModel_1.default.buscarId(id);
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
        });
    }
    actualizarSlot(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*console.log(req.body);
            const { id } = req.params;
            const result = await userModel.actualizar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a user ' + id });*/
            //return res.json({ text: 'actualizando' });
            console.log(req.body);
            const { id } = req.params;
            const result = yield slotModel_1.default.actualizar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    eliminarSlot(req, res) {
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
            const result = yield slotModel_1.default.eliminar(id);
            return res.json({ text: 'deleting a slot ' + id });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const slotController = new SlotController();
exports.default = slotController;
//# sourceMappingURL=slotController.js.map