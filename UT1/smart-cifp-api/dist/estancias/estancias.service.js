"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstanciasService = void 0;
const common_1 = require("@nestjs/common");
const ESTANCIAS = [
    { codigo: 'A23', nRadiadores: 2, temperaturaConfort: 21 },
    { codigo: 'A24', nRadiadores: 2, temperaturaConfort: 21 },
    { codigo: 'A25', nRadiadores: 3, temperaturaConfort: 20 },
    { codigo: 'A26', nRadiadores: 3, temperaturaConfort: 20 },
    { codigo: 'A27', nRadiadores: 2, temperaturaConfort: 21 },
];
let EstanciasService = class EstanciasService {
    getAll() {
        return ESTANCIAS;
    }
    getNumberElements() {
        return 'El número total de estancias es ' + ESTANCIAS.length;
    }
    getOne(id) {
        for (let i = 0; i < ESTANCIAS.length; i++) {
            if (ESTANCIAS[i].codigo === id) {
                return ESTANCIAS[i];
            }
        }
        throw new common_1.NotFoundException(`No existe una zona con el código: ${id}`);
    }
    NumeroTotalRadiadores() {
        let total = 0;
        for (let i = 0; i < ESTANCIAS.length; i++) {
            total += ESTANCIAS[i].nRadiadores;
        }
        return total;
    }
    NumeroRadiadoresEstancias(id) {
        const estancia = this.getOne(id);
        return estancia.nRadiadores;
    }
};
exports.EstanciasService = EstanciasService;
__decorate([
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstanciasService.prototype, "getOne", null);
exports.EstanciasService = EstanciasService = __decorate([
    (0, common_1.Injectable)()
], EstanciasService);
//# sourceMappingURL=estancias.service.js.map