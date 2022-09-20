"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../lib/verifyToken");
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
        this.router.post('/agregar', verifyToken_1.TokenValidation, autoController.agregaAuto);
        this.router.get('/listar', verifyToken_1.TokenValidation, autoController.listaAuto);
        this.router.get('/buscar/:id', verifyToken_1.TokenValidation, autoController.buscarAuto);
        this.router.put('/modificar/:id', verifyToken_1.TokenValidation, autoController.actualizar);
        this.router.delete('/eliminar/:id', verifyToken_1.TokenValidation, autoController.eliminar);
    }
}
//Exportamos el enrutador con 
const autosRoutes = new AutosRoutes();
exports.default = autosRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=autosRoutes%20copy.js.map