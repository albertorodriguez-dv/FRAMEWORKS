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
exports.ZonasController = void 0;
const common_1 = require("@nestjs/common");
const update_umbrales_dto_js_1 = require("./dto/update-umbrales.dto.js");
const zonas_service_js_1 = require("./zonas.service.js");
let ZonasController = class ZonasController {
    zonasService;
    constructor(zonasService) {
        this.zonasService = zonasService;
    }
    encuentraTodos() {
        return this.zonasService.encuentraTodos();
    }
    encuentraUno(id) {
        return this.zonasService.encuentraUno(id);
    }
    actualizaUmbrales(id, dto) {
        const zona = this.zonasService.encuentraUno(id);
        if (dto.humedadSeca >= dto.humedadObjetivo) {
            throw new common_1.BadRequestException('humedadSeca debe ser menor que humedadObjetivo');
        }
        zona.humedadSeca = dto.humedadSeca;
        zona.humedadObjetivo = dto.humedadObjetivo;
        return zona;
    }
};
exports.ZonasController = ZonasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZonasController.prototype, "encuentraTodos", null);
__decorate([
    (0, common_1.Get)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ZonasController.prototype, "encuentraUno", null);
__decorate([
    (0, common_1.Patch)(':codigo/umbrales'),
    __param(0, (0, common_1.Param)('codigo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_umbrales_dto_js_1.UpdateUmbralesDto]),
    __metadata("design:returntype", void 0)
], ZonasController.prototype, "actualizaUmbrales", null);
exports.ZonasController = ZonasController = __decorate([
    (0, common_1.Controller)('zonas'),
    __metadata("design:paramtypes", [zonas_service_js_1.ZonasService])
], ZonasController);
//# sourceMappingURL=zonas.controller.js.map