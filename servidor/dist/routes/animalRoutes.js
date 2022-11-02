"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../lib/verifyToken");
const animalController_1 = __importDefault(require("../controller/animalController"));
class AnimalRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Main!!!');
        });
        /*this.router.get('/signin',(req:Request,res:Response)=>
        {
            res.send('Sign In!!!');
        });*/
        /* this.router.get('/signin',userController.signin);
 
         //inicio de sesion
         this.router.post('/signin',userController.login);
         
         //registro
         this.router.post('/signup',userController.addUser);*/
        //CRUD
        this.router.post('/agregar', verifyToken_1.TokenValidation, animalController_1.default.agregaAnimal);
        this.router.get('/listar', verifyToken_1.TokenValidation, animalController_1.default.listaAnimal);
        this.router.get('/buscar/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarAnimal);
        this.router.get('/buscusuario/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarUsua);
        this.router.get('/buscadop/:id', verifyToken_1.TokenValidation, animalController_1.default.buscaAdopcionUsu);
        this.router.get('/buscaLocal/:id', verifyToken_1.TokenValidation, animalController_1.default.buscar);
        this.router.get('/buscaRaza/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarRaza);
        this.router.put('/modificar/:id', verifyToken_1.TokenValidation, animalController_1.default.actualizar);
        this.router.get('/busqueda/:id', verifyToken_1.TokenValidation, animalController_1.default.busqueAnimal);
        this.router.delete('/eliminar/:id', verifyToken_1.TokenValidation, animalController_1.default.eliminar);
        this.router.get('/listarSexo', verifyToken_1.TokenValidation, animalController_1.default.listaSexo);
        this.router.get('/listaRaza', verifyToken_1.TokenValidation, animalController_1.default.listarRaza);
        this.router.get('/listaAnimales', verifyToken_1.TokenValidation, animalController_1.default.listarAnimales);
        this.router.get('/listaProvincia', verifyToken_1.TokenValidation, animalController_1.default.listarProvincia);
        this.router.get('/listaLocalidad', verifyToken_1.TokenValidation, animalController_1.default.listarLocalidad);
        this.router.post('/adopcion', verifyToken_1.TokenValidation, animalController_1.default.agregaAdopcion);
        this.router.get('/busc/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarId);
        this.router.delete('/eliminteresado/:id', verifyToken_1.TokenValidation, animalController_1.default.eliminarInteresa);
        this.router.post('/agregaradopciones', verifyToken_1.TokenValidation, animalController_1.default.agregarAdopciones);
        this.router.get('/buscardados/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarDados);
        this.router.get('/solicitud/:id', verifyToken_1.TokenValidation, animalController_1.default.buscarSolicitud);
        this.router.put('/modsolicitud/:id', verifyToken_1.TokenValidation, animalController_1.default.modificar);
        this.router.get('/buscaradopciones/:id/:use', verifyToken_1.TokenValidation, animalController_1.default.buscaradop);
        this.router.put('/modsolicitud/:id/:nom', verifyToken_1.TokenValidation, animalController_1.default.actualizadopcion);
        this.router.post('/agregarsolicitud', verifyToken_1.TokenValidation, animalController_1.default.agregarSolicitud);
        this.router.get('/buscasolicitu/:id', verifyToken_1.TokenValidation, animalController_1.default.buscaSolicitud);
        this.router.delete('/eliminasolicitud/:id', verifyToken_1.TokenValidation, animalController_1.default.eliminarSolicitud);
        this.router.get('/busadopciones/:id', verifyToken_1.TokenValidation, animalController_1.default.busAdopcione);
    }
}
//Exportamos el enrutador con 
const animalRoutes = new AnimalRoutes();
exports.default = animalRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=animalRoutes.js.map