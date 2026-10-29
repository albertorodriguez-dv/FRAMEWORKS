"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonasService = void 0;
const common_1 = require("@nestjs/common");
const ZONAS_EJEMPLO = [
    {
        codigo: 'Z01',
        nombre: 'Tomates - nave norte',
        cultivo: 'Tomate',
        humedadSeca: 45,
        humedadObjetivo: 65,
    },
    {
        codigo: 'Z02',
        nombre: 'Lechugas - nave centro',
        cultivo: 'Lechuga',
        humedadSeca: 55,
        humedadObjetivo: 75,
    },
    {
        codigo: 'Z03',
        nombre: 'Pimientos - nave sur',
        cultivo: 'Pimiento',
        humedadSeca: 40,
        humedadObjetivo: 60,
    },
    {
        codigo: 'Z04',
        nombre: 'Semillero de fresas',
        cultivo: 'Fresa',
        humedadSeca: 50,
        humedadObjetivo: 70,
    },
];
let ZonasService = class ZonasService {
    encuentraTodos() {
        return ZONAS_EJEMPLO;
    }
    encuentraUno(id) {
        for (let i = 0; i < ZONAS_EJEMPLO.length; i++) {
            if (ZONAS_EJEMPLO[i].codigo === id) {
                return ZONAS_EJEMPLO[i];
            }
        }
        throw new common_1.NotFoundException(`Zona ${id} no encontrada`);
    }
};
exports.ZonasService = ZonasService;
exports.ZonasService = ZonasService = __decorate([
    (0, common_1.Injectable)()
], ZonasService);
//# sourceMappingURL=zonas.service.js.map