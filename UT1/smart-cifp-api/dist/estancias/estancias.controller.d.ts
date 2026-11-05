import { EstanciasService } from './estancias.service.js';
export declare class EstanciasController {
    private readonly estanciasService;
    constructor(estanciasService: EstanciasService);
    findAll(): {
        codigo: string;
        nRadiadores: number;
        temperaturaConfort: number;
    }[];
    getNumberElements(): string;
    findOne(codigo: string): {
        codigo: string;
        nRadiadores: number;
        temperaturaConfort: number;
    };
}
