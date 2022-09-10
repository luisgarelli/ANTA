"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const verifyToken_1 = require("../lib/verifyToken");
class UserRoutes {
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
        this.router.get('/signin', userController_1.default.signin);
        //inicio de sesion
        this.router.post('/signin', userController_1.default.login);
        //registro
        this.router.post('/signup', userController_1.default.addUser);
        //CRUD
        this.router.post('/add', userController_1.default.addUser);
        this.router.get('/list', verifyToken_1.TokenValidation, userController_1.default.list);
        this.router.get('/find/:id', userController_1.default.find);
        this.router.get('/busca/:id', userController_1.default.buscar);
        this.router.put('/update/:id', verifyToken_1.TokenValidation, userController_1.default.update);
        this.router.delete('/delete/:id', verifyToken_1.TokenValidation, userController_1.default.delete);
        this.router.get('/listar', verifyToken_1.TokenValidation, userController_1.default.listarSexo);
        this.router.get('/listaProvincia', verifyToken_1.TokenValidation, userController_1.default.listarProvincia);
        this.router.get('/listaLocalidad', verifyToken_1.TokenValidation, userController_1.default.listarLocalidad);
    }
}
//Exportamos el enrutador con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=userRoutes.js.map