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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUmbralesDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateUmbralesDto {
    humedadSeca;
    humedadObjetivo;
}
exports.UpdateUmbralesDto = UpdateUmbralesDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'humedadSeca debe ser un número' }),
    (0, class_validator_1.Min)(10, { message: 'humedadSeca no puede ser menor del 10%' }),
    (0, class_validator_1.Max)(90, { message: 'humedadSeca no puede ser mayor del 90%' }),
    __metadata("design:type", Number)
], UpdateUmbralesDto.prototype, "humedadSeca", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'humedadObjetivo debe ser un número' }),
    (0, class_validator_1.Min)(10, { message: 'humedadObjetivo no puede ser menor del 10%' }),
    (0, class_validator_1.Max)(90, { message: 'humedadObjetivo no puede ser mayor del 90%' }),
    __metadata("design:type", Number)
], UpdateUmbralesDto.prototype, "humedadObjetivo", void 0);
//# sourceMappingURL=update-umbrales.dto.js.map