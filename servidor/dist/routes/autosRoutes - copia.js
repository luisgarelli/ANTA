"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autoController_1 = __importDefault(require("../controller/autoController"));
class AutosRoutes {
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
        this.router.post('/agregar', autoController_1.default.agregaAuto);
        this.router.get('/listar', autoController_1.default.listaAuto);
        this.router.get('/buscar/:id', autoController_1.default.buscarAuto);
        this.router.put('/modificar/:id', autoController_1.default.actualizar);
        this.router.delete('/eliminar/:id', autoController_1.default.eliminar);
    }
}
//Exportamos el enrutador con 
const autosRoutes = new AutosRoutes();
exports.default = autosRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=autosRoutes%20-%20copia.js.map