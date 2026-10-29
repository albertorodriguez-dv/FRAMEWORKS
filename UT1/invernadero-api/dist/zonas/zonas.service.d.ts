export declare class ZonasService {
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
}
