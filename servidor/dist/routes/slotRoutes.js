"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slotController_1 = __importDefault(require("../controller/slotController"));
const verifyToken_1 = require("../lib/verifyToken");
class SlotRoutes {
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
        this.router.post('/agrega', verifyToken_1.TokenValidation, slotController_1.default.agregarSlot);
        this.router.get('/lista', verifyToken_1.TokenValidation, slotController_1.default.listarSlot);
        this.router.get('/busca/:id', verifyToken_1.TokenValidation, slotController_1.default.buscarSlot);
        this.router.put('/modifica/:id', verifyToken_1.TokenValidation, slotController_1.default.actualizarSlot);
        this.router.delete('/elimina/:id', verifyToken_1.TokenValidation, slotController_1.default.eliminarSlot);
    }
}
//Exportamos el enrutador con 
const slotRoutes = new SlotRoutes();
exports.default = slotRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=slotRoutes.js.map