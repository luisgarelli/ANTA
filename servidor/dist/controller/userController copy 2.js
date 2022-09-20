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
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    signin(req, res) {
        console.log(req.body);
        res.send('Sign In!!!');
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, password } = req.body; /* hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.*/
            const result = yield userModel_1.default.buscarNombre(usuario);
            console.log(usuario);
            console.log(password);
            console.log(result);
            if (!result) {
                res.json({ "login": "invalido", "mensaje": "Usuario no registrado Recibido" });
                return;
            }
            if (result.nombre == usuario && result.password == password) {
                const token = jsonwebtoken_1.default.sign({ _id: result.id }, "secretKey");
                res.json({ "login": "ok", "mensaje": "Bienvenido " + result.nombre, token: token });
                return;
            }
            res.json({ "login": "incorrecto", "mensaje": "Usuario y/o contraseña incorrectos!!" });
        });
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
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body;
            delete usuario.repassword;
            console.log(req.body);
            //return;
            //res.send('Usuario agregado!!!');
            const busqueda = yield userModel_1.default.buscarNombre(usuario.nombre);
            if (!busqueda) {
                const result = yield userModel_1.default.crear(usuario);
                return res.json({ "save": "ok", "mensaje": 'User saved!!' });
            }
            return res.json({ "save": "invalido", "mensaje": 'User exists!!' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.header("Authorization")); //Observamos el valor del token
            const usuarios = yield userModel_1.default.listar();
            // console.log(usuarios);
            return res.json(usuarios);
            //res.send('Listado de usuarios!!!');
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield userModel_1.default.buscarId(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield userModel_1.default.actualizar(req.body, id);
            //res.send('Usuario '+ req.params.id +' actualizado!!!');
            return res.json({ text: 'updating a user ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //res.send('Usuario '+ req.params.id +' Eliminado!!!');
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield userModel_1.default.eliminar(id);
            return res.json({ text: 'deleting a user ' + id });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController%20copy%202.js.map