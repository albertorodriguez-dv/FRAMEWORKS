export declare const estados_bomba_estado: {
    readonly ON: "ON";
    readonly OFF: "OFF";
};
export type estados_bomba_estado = (typeof estados_bomba_estado)[keyof typeof estados_bomba_estado];
export declare const estados_valvula_estado: {
    readonly ABIERTA: "ABIERTA";
    readonly CERRADA: "CERRADA";
};
export type estados_valvula_estado = (typeof estados_valvula_estado)[keyof typeof estados_valvula_estado];
export declare const estados_valvula_motivo: {
    readonly AUTOMATICO: "AUTOMATICO";
    readonly MANUAL: "MANUAL";
};
export type estados_valvula_motivo = (typeof estados_valvula_motivo)[keyof typeof estados_valvula_motivo];
