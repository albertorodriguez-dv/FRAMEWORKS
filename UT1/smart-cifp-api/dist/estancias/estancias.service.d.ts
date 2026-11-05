export declare class EstanciasService {
    getAll(): {
        codigo: string;
        nRadiadores: number;
        temperaturaConfort: number;
    }[];
    getNumberElements(): string;
    getOne(id: string): {
        codigo: string;
        nRadiadores: number;
        temperaturaConfort: number;
    };
    NumeroTotalRadiadores(): number;
    NumeroRadiadoresEstancias(id: string): number;
}
