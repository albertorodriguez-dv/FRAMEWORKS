import { UpdateUmbralesDto } from './dto/update-umbrales.dto.js';
import { ZonasService } from './zonas.service.js';
export declare class ZonasController {
    private readonly zonasService;
    constructor(zonasService: ZonasService);
    encuentraTodos(): {
        codigo: string;
        nombre: string;
        cultivo: string;
        humedadSeca: number;
        humedadObjetivo: number;
    }[];
    encuentraUno(id: string): {
        codigo: string;
        nombre: string;
        cultivo: string;
        humedadSeca: number;
        humedadObjetivo: number;
    };
    actualizaUmbrales(id: string, dto: UpdateUmbralesDto): {
        codigo: string;
        nombre: string;
        cultivo: string;
        humedadSeca: number;
        humedadObjetivo: number;
    };
}
