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
const animalModel_1 = __importDefault(require("../models/animalModel"));
class AnimalController {
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
    agregaAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = req.body;
            //delete slot.repassword;
            console.log(req.body);
            //res.send('Usuario agregado!!!');
            const busqueda = yield animalModel_1.default.buscarNombre(animal.slot);
            if (!busqueda) {
                const result = yield animalModel_1.default.crear(animal);
                return res.json({ mensaje: 'Slot saved!!' });
            }
            return res.json({ mensaje: 'Slot exists!!' });
        });
    }
    listaAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listar();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    listaSexo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listarSexo();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    listarRaza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listarRaza();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    listarAnimales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listarAnimales();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    buscarAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscarId(id);
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
    buscarUsua(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscarUsuario(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscarListado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.listadoBuscar(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscarProv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.busProvincia(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscarSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscarSolicitud(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscaSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscaSolicitud(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscarDados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscarAdoptado(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    buscaAdopcionUsu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.buscarUsuarioAdopcion(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    busqueAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const auto = yield animalModel_1.default.busquedaAnimal(id);
            if (auto)
                return res.json(auto);
            res.status(404).json({ text: "Auto doesn't exists" });
        });
    }
    listarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listarProvincia();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    listarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            /* const usuarios = await userModel.listar();
             console.log(usuarios);
             return res.json(usuarios);*/
            // res.send('Listado de usuarios!!!');
            //return res.json("listando");
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const autos = yield animalModel_1.default.listarLocalidad();
            console.log(autos);
            return res.json(autos);
            //res.send('Listado de usuarios!!!');
        });
    }
    buscarId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.buscarIdAnimal(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.buscarProvincia(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    busLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.busProvin(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    buscarRaza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.buscarRaza(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    contador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.contador(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield animalModel_1.default.actualizar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    actualizarSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield animalModel_1.default.actualizaSolicitud(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    actualizarUsuari(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield animalModel_1.default.actualizarUsuario(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield animalModel_1.default.modificar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    updateSolicitu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield animalModel_1.default.updateSolicitud(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
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
            const result = yield animalModel_1.default.eliminar(id);
            return res.json({ text: 'deleting an auto ' + id });
        });
    }
    eliminarTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const { nombre } = req.params;
            const result = yield animalModel_1.default.eliminarTodos(id, nombre);
            return res.json({ text: 'deleting an auto ' + id });
        });
    }
    eliminarInteresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield animalModel_1.default.eliminarInteresado(id);
            return res.json({ text: 'deleting un interesado' + id });
        });
    }
    eliminarAdopcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield animalModel_1.default.eliminarAdopcion(id);
            return res.json({ text: 'deleting un interesado' + id });
        });
    }
    eliminarSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield animalModel_1.default.eliminarSolicitud(id);
            return res.json({ text: 'deleting un interesado' + id });
        });
    }
    agregaAdopcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = req.body;
            const { id_usuario } = req.body;
            const { id_animal } = req.body;
            //delete slot.repassword;
            console.log(req.body);
            //res.send('Usuario agregado!!!');
            const busqueda = yield animalModel_1.default.buscarAdopcion(animal.slot);
            if (!busqueda) {
                const result = yield animalModel_1.default.crearAdopcion(animal);
                return res.json({ mensaje: 'Slot saved!!' });
            }
            return res.json({ mensaje: 'Slot exists!!' });
        });
    }
    agregarAdopciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = req.body;
            const { id_usuario } = req.body;
            const { id_animal } = req.body;
            //delete slot.repassword;
            console.log(req.body);
            //res.send('Usuario agregado!!!');
            const busqueda = yield animalModel_1.default.buscarAdopciones(animal.slot);
            if (!busqueda) {
                const result = yield animalModel_1.default.crearAdopciones(animal);
                return res.json({ mensaje: 'animal saved!!' });
            }
            return res.json({ mensaje: 'animal exists!!' });
        });
    }
    buscaradop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const { nom } = req.params;
            const usuario = yield animalModel_1.default.buscaradop(id, nom);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    actualizadopcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const { nom } = req.params;
            const result = yield animalModel_1.default.actualiadopcion(req.body, id, nom);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    actualizaElimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const { nom } = req.params;
            const result = yield animalModel_1.default.actualizaEliminar(req.body, id, nom);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a slot ' + id });
        });
    }
    agregarSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = req.body;
            const { id_usuario } = req.body;
            const { id_animal } = req.body;
            //delete slot.repassword;
            console.log(req.body);
            //res.send('Usuario agregado!!!');
            const busqueda = yield animalModel_1.default.buscarSolici(animal.slot);
            if (!busqueda) {
                const result = yield animalModel_1.default.crearSolicitud(animal);
                return res.json({ mensaje: 'animal saved!!' });
            }
            return res.json({ mensaje: 'animal exists!!' });
        });
    }
    busAdopcione(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield animalModel_1.default.busAdopciones(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const animalController = new AnimalController();
exports.default = animalController;
//# sourceMappingURL=animalController.js.map