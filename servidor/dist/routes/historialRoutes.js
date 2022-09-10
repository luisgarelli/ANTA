"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historialController_1 = __importDefault(require("../controller/historialController"));
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
        this.router.get('/listar-historial', verifyToken_1.TokenValidation, historialController_1.default.listarTablas);
        //CRUD
        this.router.post('/agregar', verifyToken_1.TokenValidation, historialController_1.default.agregarHistorial);
        this.router.get('/listar', verifyToken_1.TokenValidation, historialController_1.default.listarHistorial);
        this.router.get('/buscar/:id', verifyToken_1.TokenValidation, historialController_1.default.buscarHistorial);
        this.router.put('/modificar/:id', verifyToken_1.TokenValidation, historialController_1.default.actualizar);
        this.router.delete('/eliminar/:id', verifyToken_1.TokenValidation, historialController_1.default.eliminar);
    }
}
//Exportamos el enrutador con 
const autosRoutes = new AutosRoutes();
exports.default = autosRoutes.router;
//Es de notar que el metodo get sera una peticion que recibe el servidor. El primer parametro es una ruta existente. En este caso la principal / en el navegador se vera como http://localhost:3000/user
//# sourceMappingURL=historialRoutes.js.map