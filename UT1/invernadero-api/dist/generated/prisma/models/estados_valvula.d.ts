import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type estados_valvulaModel = runtime.Types.Result.DefaultSelection<Prisma.$estados_valvulaPayload>;
export type AggregateEstados_valvula = {
    _count: Estados_valvulaCountAggregateOutputType | null;
    _avg: Estados_valvulaAvgAggregateOutputType | null;
    _sum: Estados_valvulaSumAggregateOutputType | null;
    _min: Estados_valvulaMinAggregateOutputType | null;
    _max: Estados_valvulaMaxAggregateOutputType | null;
};
export type Estados_valvulaAvgAggregateOutputType = {
    id: number | null;
    id_usuario: number | null;
};
export type Estados_valvulaSumAggregateOutputType = {
    id: number | null;
    id_usuario: number | null;
};
export type Estados_valvulaMinAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    estado: $Enums.estados_valvula_estado | null;
    fecha: Date | null;
    hora: Date | null;
    motivo: $Enums.estados_valvula_motivo | null;
    id_usuario: number | null;
};
export type Estados_valvulaMaxAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    estado: $Enums.estados_valvula_estado | null;
    fecha: Date | null;
    hora: Date | null;
    motivo: $Enums.estados_valvula_motivo | null;
    id_usuario: number | null;
};
export type Estados_valvulaCountAggregateOutputType = {
    id: number;
    codigo_zona: number;
    estado: number;
    fecha: number;
    hora: number;
    motivo: number;
    id_usuario: number;
    _all: number;
};
export type Estados_valvulaAvgAggregateInputType = {
    id?: true;
    id_usuario?: true;
};
export type Estados_valvulaSumAggregateInputType = {
    id?: true;
    id_usuario?: true;
};
export type Estados_valvulaMinAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
    motivo?: true;
    id_usuario?: true;
};
export type Estados_valvulaMaxAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
    motivo?: true;
    id_usuario?: true;
};
export type Estados_valvulaCountAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
    motivo?: true;
    id_usuario?: true;
    _all?: true;
};
export type Estados_valvulaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_valvulaWhereInput;
    orderBy?: Prisma.estados_valvulaOrderByWithRelationInput | Prisma.estados_valvulaOrderByWithRelationInput[];
    cursor?: Prisma.estados_valvulaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Estados_valvulaCountAggregateInputType;
    _avg?: Estados_valvulaAvgAggregateInputType;
    _sum?: Estados_valvulaSumAggregateInputType;
    _min?: Estados_valvulaMinAggregateInputType;
    _max?: Estados_valvulaMaxAggregateInputType;
};
export type GetEstados_valvulaAggregateType<T extends Estados_valvulaAggregateArgs> = {
    [P in keyof T & keyof AggregateEstados_valvula]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstados_valvula[P]> : Prisma.GetScalarType<T[P], AggregateEstados_valvula[P]>;
};
export type estados_valvulaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_valvulaWhereInput;
    orderBy?: Prisma.estados_valvulaOrderByWithAggregationInput | Prisma.estados_valvulaOrderByWithAggregationInput[];
    by: Prisma.Estados_valvulaScalarFieldEnum[] | Prisma.Estados_valvulaScalarFieldEnum;
    having?: Prisma.estados_valvulaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Estados_valvulaCountAggregateInputType | true;
    _avg?: Estados_valvulaAvgAggregateInputType;
    _sum?: Estados_valvulaSumAggregateInputType;
    _min?: Estados_valvulaMinAggregateInputType;
    _max?: Estados_valvulaMaxAggregateInputType;
};
export type Estados_valvulaGroupByOutputType = {
    id: number;
    codigo_zona: string;
    estado: $Enums.estados_valvula_estado;
    fecha: Date;
    hora: Date;
    motivo: $Enums.estados_valvula_motivo;
    id_usuario: number | null;
    _count: Estados_valvulaCountAggregateOutputType | null;
    _avg: Estados_valvulaAvgAggregateOutputType | null;
    _sum: Estados_valvulaSumAggregateOutputType | null;
    _min: Estados_valvulaMinAggregateOutputType | null;
    _max: Estados_valvulaMaxAggregateOutputType | null;
};
export type GetEstados_valvulaGroupByPayload<T extends estados_valvulaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Estados_valvulaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Estados_valvulaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Estados_valvulaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Estados_valvulaGroupByOutputType[P]>;
}>>;
export type estados_valvulaWhereInput = {
    AND?: Prisma.estados_valvulaWhereInput | Prisma.estados_valvulaWhereInput[];
    OR?: Prisma.estados_valvulaWhereInput[];
    NOT?: Prisma.estados_valvulaWhereInput | Prisma.estados_valvulaWhereInput[];
    id?: Prisma.IntFilter<"estados_valvula"> | number;
    codigo_zona?: Prisma.StringFilter<"estados_valvula"> | string;
    estado?: Prisma.Enumestados_valvula_estadoFilter<"estados_valvula"> | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    hora?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFilter<"estados_valvula"> | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.IntNullableFilter<"estados_valvula"> | number | null;
    usuarios?: Prisma.XOR<Prisma.UsuariosNullableScalarRelationFilter, Prisma.usuariosWhereInput> | null;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
};
export type estados_valvulaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarios?: Prisma.usuariosOrderByWithRelationInput;
    zonas?: Prisma.zonasOrderByWithRelationInput;
    _relevance?: Prisma.estados_valvulaOrderByRelevanceInput;
};
export type estados_valvulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.estados_valvulaWhereInput | Prisma.estados_valvulaWhereInput[];
    OR?: Prisma.estados_valvulaWhereInput[];
    NOT?: Prisma.estados_valvulaWhereInput | Prisma.estados_valvulaWhereInput[];
    codigo_zona?: Prisma.StringFilter<"estados_valvula"> | string;
    estado?: Prisma.Enumestados_valvula_estadoFilter<"estados_valvula"> | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    hora?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFilter<"estados_valvula"> | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.IntNullableFilter<"estados_valvula"> | number | null;
    usuarios?: Prisma.XOR<Prisma.UsuariosNullableScalarRelationFilter, Prisma.usuariosWhereInput> | null;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
}, "id">;
export type estados_valvulaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.estados_valvulaCountOrderByAggregateInput;
    _avg?: Prisma.estados_valvulaAvgOrderByAggregateInput;
    _max?: Prisma.estados_valvulaMaxOrderByAggregateInput;
    _min?: Prisma.estados_valvulaMinOrderByAggregateInput;
    _sum?: Prisma.estados_valvulaSumOrderByAggregateInput;
};
export type estados_valvulaScalarWhereWithAggregatesInput = {
    AND?: Prisma.estados_valvulaScalarWhereWithAggregatesInput | Prisma.estados_valvulaScalarWhereWithAggregatesInput[];
    OR?: Prisma.estados_valvulaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.estados_valvulaScalarWhereWithAggregatesInput | Prisma.estados_valvulaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"estados_valvula"> | number;
    codigo_zona?: Prisma.StringWithAggregatesFilter<"estados_valvula"> | string;
    estado?: Prisma.Enumestados_valvula_estadoWithAggregatesFilter<"estados_valvula"> | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"estados_valvula"> | Date | string;
    hora?: Prisma.DateTimeWithAggregatesFilter<"estados_valvula"> | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoWithAggregatesFilter<"estados_valvula"> | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"estados_valvula"> | number | null;
};
export type estados_valvulaCreateInput = {
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    usuarios?: Prisma.usuariosCreateNestedOneWithoutEstados_valvulaInput;
    zonas: Prisma.zonasCreateNestedOneWithoutEstados_valvulaInput;
};
export type estados_valvulaUncheckedCreateInput = {
    id?: number;
    codigo_zona: string;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    id_usuario?: number | null;
};
export type estados_valvulaUpdateInput = {
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    usuarios?: Prisma.usuariosUpdateOneWithoutEstados_valvulaNestedInput;
    zonas?: Prisma.zonasUpdateOneRequiredWithoutEstados_valvulaNestedInput;
};
export type estados_valvulaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type estados_valvulaCreateManyInput = {
    id?: number;
    codigo_zona: string;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    id_usuario?: number | null;
};
export type estados_valvulaUpdateManyMutationInput = {
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
};
export type estados_valvulaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type estados_valvulaOrderByRelevanceInput = {
    fields: Prisma.estados_valvulaOrderByRelevanceFieldEnum | Prisma.estados_valvulaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type estados_valvulaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type estados_valvulaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type estados_valvulaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type estados_valvulaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type estados_valvulaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type Estados_valvulaListRelationFilter = {
    every?: Prisma.estados_valvulaWhereInput;
    some?: Prisma.estados_valvulaWhereInput;
    none?: Prisma.estados_valvulaWhereInput;
};
export type estados_valvulaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumestados_valvula_estadoFieldUpdateOperationsInput = {
    set?: $Enums.estados_valvula_estado;
};
export type Enumestados_valvula_motivoFieldUpdateOperationsInput = {
    set?: $Enums.estados_valvula_motivo;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type estados_valvulaCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput> | Prisma.estados_valvulaCreateWithoutUsuariosInput[] | Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput | Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.estados_valvulaCreateManyUsuariosInputEnvelope;
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
};
export type estados_valvulaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput> | Prisma.estados_valvulaCreateWithoutUsuariosInput[] | Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput | Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.estados_valvulaCreateManyUsuariosInputEnvelope;
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
};
export type estados_valvulaUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput> | Prisma.estados_valvulaCreateWithoutUsuariosInput[] | Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput | Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.estados_valvulaUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.estados_valvulaUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.estados_valvulaCreateManyUsuariosInputEnvelope;
    set?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    disconnect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    delete?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    update?: Prisma.estados_valvulaUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.estados_valvulaUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.estados_valvulaUpdateManyWithWhereWithoutUsuariosInput | Prisma.estados_valvulaUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
};
export type estados_valvulaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput> | Prisma.estados_valvulaCreateWithoutUsuariosInput[] | Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput | Prisma.estados_valvulaCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.estados_valvulaUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.estados_valvulaUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.estados_valvulaCreateManyUsuariosInputEnvelope;
    set?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    disconnect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    delete?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    update?: Prisma.estados_valvulaUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.estados_valvulaUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.estados_valvulaUpdateManyWithWhereWithoutUsuariosInput | Prisma.estados_valvulaUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
};
export type estados_valvulaCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput> | Prisma.estados_valvulaCreateWithoutZonasInput[] | Prisma.estados_valvulaUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutZonasInput | Prisma.estados_valvulaCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.estados_valvulaCreateManyZonasInputEnvelope;
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
};
export type estados_valvulaUncheckedCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput> | Prisma.estados_valvulaCreateWithoutZonasInput[] | Prisma.estados_valvulaUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutZonasInput | Prisma.estados_valvulaCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.estados_valvulaCreateManyZonasInputEnvelope;
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
};
export type estados_valvulaUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput> | Prisma.estados_valvulaCreateWithoutZonasInput[] | Prisma.estados_valvulaUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutZonasInput | Prisma.estados_valvulaCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.estados_valvulaUpsertWithWhereUniqueWithoutZonasInput | Prisma.estados_valvulaUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.estados_valvulaCreateManyZonasInputEnvelope;
    set?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    disconnect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    delete?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    update?: Prisma.estados_valvulaUpdateWithWhereUniqueWithoutZonasInput | Prisma.estados_valvulaUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.estados_valvulaUpdateManyWithWhereWithoutZonasInput | Prisma.estados_valvulaUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
};
export type estados_valvulaUncheckedUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput> | Prisma.estados_valvulaCreateWithoutZonasInput[] | Prisma.estados_valvulaUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.estados_valvulaCreateOrConnectWithoutZonasInput | Prisma.estados_valvulaCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.estados_valvulaUpsertWithWhereUniqueWithoutZonasInput | Prisma.estados_valvulaUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.estados_valvulaCreateManyZonasInputEnvelope;
    set?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    disconnect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    delete?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    connect?: Prisma.estados_valvulaWhereUniqueInput | Prisma.estados_valvulaWhereUniqueInput[];
    update?: Prisma.estados_valvulaUpdateWithWhereUniqueWithoutZonasInput | Prisma.estados_valvulaUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.estados_valvulaUpdateManyWithWhereWithoutZonasInput | Prisma.estados_valvulaUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
};
export type estados_valvulaCreateWithoutUsuariosInput = {
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    zonas: Prisma.zonasCreateNestedOneWithoutEstados_valvulaInput;
};
export type estados_valvulaUncheckedCreateWithoutUsuariosInput = {
    id?: number;
    codigo_zona: string;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
};
export type estados_valvulaCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    create: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput>;
};
export type estados_valvulaCreateManyUsuariosInputEnvelope = {
    data: Prisma.estados_valvulaCreateManyUsuariosInput | Prisma.estados_valvulaCreateManyUsuariosInput[];
    skipDuplicates?: boolean;
};
export type estados_valvulaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    update: Prisma.XOR<Prisma.estados_valvulaUpdateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.estados_valvulaCreateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedCreateWithoutUsuariosInput>;
};
export type estados_valvulaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    data: Prisma.XOR<Prisma.estados_valvulaUpdateWithoutUsuariosInput, Prisma.estados_valvulaUncheckedUpdateWithoutUsuariosInput>;
};
export type estados_valvulaUpdateManyWithWhereWithoutUsuariosInput = {
    where: Prisma.estados_valvulaScalarWhereInput;
    data: Prisma.XOR<Prisma.estados_valvulaUpdateManyMutationInput, Prisma.estados_valvulaUncheckedUpdateManyWithoutUsuariosInput>;
};
export type estados_valvulaScalarWhereInput = {
    AND?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
    OR?: Prisma.estados_valvulaScalarWhereInput[];
    NOT?: Prisma.estados_valvulaScalarWhereInput | Prisma.estados_valvulaScalarWhereInput[];
    id?: Prisma.IntFilter<"estados_valvula"> | number;
    codigo_zona?: Prisma.StringFilter<"estados_valvula"> | string;
    estado?: Prisma.Enumestados_valvula_estadoFilter<"estados_valvula"> | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    hora?: Prisma.DateTimeFilter<"estados_valvula"> | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFilter<"estados_valvula"> | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.IntNullableFilter<"estados_valvula"> | number | null;
};
export type estados_valvulaCreateWithoutZonasInput = {
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    usuarios?: Prisma.usuariosCreateNestedOneWithoutEstados_valvulaInput;
};
export type estados_valvulaUncheckedCreateWithoutZonasInput = {
    id?: number;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    id_usuario?: number | null;
};
export type estados_valvulaCreateOrConnectWithoutZonasInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    create: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput>;
};
export type estados_valvulaCreateManyZonasInputEnvelope = {
    data: Prisma.estados_valvulaCreateManyZonasInput | Prisma.estados_valvulaCreateManyZonasInput[];
    skipDuplicates?: boolean;
};
export type estados_valvulaUpsertWithWhereUniqueWithoutZonasInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    update: Prisma.XOR<Prisma.estados_valvulaUpdateWithoutZonasInput, Prisma.estados_valvulaUncheckedUpdateWithoutZonasInput>;
    create: Prisma.XOR<Prisma.estados_valvulaCreateWithoutZonasInput, Prisma.estados_valvulaUncheckedCreateWithoutZonasInput>;
};
export type estados_valvulaUpdateWithWhereUniqueWithoutZonasInput = {
    where: Prisma.estados_valvulaWhereUniqueInput;
    data: Prisma.XOR<Prisma.estados_valvulaUpdateWithoutZonasInput, Prisma.estados_valvulaUncheckedUpdateWithoutZonasInput>;
};
export type estados_valvulaUpdateManyWithWhereWithoutZonasInput = {
    where: Prisma.estados_valvulaScalarWhereInput;
    data: Prisma.XOR<Prisma.estados_valvulaUpdateManyMutationInput, Prisma.estados_valvulaUncheckedUpdateManyWithoutZonasInput>;
};
export type estados_valvulaCreateManyUsuariosInput = {
    id?: number;
    codigo_zona: string;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
};
export type estados_valvulaUpdateWithoutUsuariosInput = {
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    zonas?: Prisma.zonasUpdateOneRequiredWithoutEstados_valvulaNestedInput;
};
export type estados_valvulaUncheckedUpdateWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
};
export type estados_valvulaUncheckedUpdateManyWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
};
export type estados_valvulaCreateManyZonasInput = {
    id?: number;
    estado: $Enums.estados_valvula_estado;
    fecha: Date | string;
    hora: Date | string;
    motivo?: $Enums.estados_valvula_motivo;
    id_usuario?: number | null;
};
export type estados_valvulaUpdateWithoutZonasInput = {
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    usuarios?: Prisma.usuariosUpdateOneWithoutEstados_valvulaNestedInput;
};
export type estados_valvulaUncheckedUpdateWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type estados_valvulaUncheckedUpdateManyWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.Enumestados_valvula_estadoFieldUpdateOperationsInput | $Enums.estados_valvula_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    motivo?: Prisma.Enumestados_valvula_motivoFieldUpdateOperationsInput | $Enums.estados_valvula_motivo;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type estados_valvulaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo_zona?: boolean;
    estado?: boolean;
    fecha?: boolean;
    hora?: boolean;
    motivo?: boolean;
    id_usuario?: boolean;
    usuarios?: boolean | Prisma.estados_valvula$usuariosArgs<ExtArgs>;
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estados_valvula"]>;
export type estados_valvulaSelectScalar = {
    id?: boolean;
    codigo_zona?: boolean;
    estado?: boolean;
    fecha?: boolean;
    hora?: boolean;
    motivo?: boolean;
    id_usuario?: boolean;
};
export type estados_valvulaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo_zona" | "estado" | "fecha" | "hora" | "motivo" | "id_usuario", ExtArgs["result"]["estados_valvula"]>;
export type estados_valvulaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | Prisma.estados_valvula$usuariosArgs<ExtArgs>;
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
};
export type $estados_valvulaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "estados_valvula";
    objects: {
        usuarios: Prisma.$usuariosPayload<ExtArgs> | null;
        zonas: Prisma.$zonasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        codigo_zona: string;
        estado: $Enums.estados_valvula_estado;
        fecha: Date;
        hora: Date;
        motivo: $Enums.estados_valvula_motivo;
        id_usuario: number | null;
    }, ExtArgs["result"]["estados_valvula"]>;
    composites: {};
};
export type estados_valvulaGetPayload<S extends boolean | null | undefined | estados_valvulaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload, S>;
export type estados_valvulaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<estados_valvulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Estados_valvulaCountAggregateInputType | true;
};
export interface estados_valvulaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['estados_valvula'];
        meta: {
            name: 'estados_valvula';
        };
    };
    findUnique<T extends estados_valvulaFindUniqueArgs>(args: Prisma.SelectSubset<T, estados_valvulaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends estados_valvulaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, estados_valvulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends estados_valvulaFindFirstArgs>(args?: Prisma.SelectSubset<T, estados_valvulaFindFirstArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends estados_valvulaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, estados_valvulaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends estados_valvulaFindManyArgs>(args?: Prisma.SelectSubset<T, estados_valvulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends estados_valvulaCreateArgs>(args: Prisma.SelectSubset<T, estados_valvulaCreateArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends estados_valvulaCreateManyArgs>(args?: Prisma.SelectSubset<T, estados_valvulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends estados_valvulaDeleteArgs>(args: Prisma.SelectSubset<T, estados_valvulaDeleteArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends estados_valvulaUpdateArgs>(args: Prisma.SelectSubset<T, estados_valvulaUpdateArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends estados_valvulaDeleteManyArgs>(args?: Prisma.SelectSubset<T, estados_valvulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends estados_valvulaUpdateManyArgs>(args: Prisma.SelectSubset<T, estados_valvulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends estados_valvulaUpsertArgs>(args: Prisma.SelectSubset<T, estados_valvulaUpsertArgs<ExtArgs>>): Prisma.Prisma__estados_valvulaClient<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends estados_valvulaCountArgs>(args?: Prisma.Subset<T, estados_valvulaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Estados_valvulaCountAggregateOutputType> : number>;
    aggregate<T extends Estados_valvulaAggregateArgs>(args: Prisma.Subset<T, Estados_valvulaAggregateArgs>): Prisma.PrismaPromise<GetEstados_valvulaAggregateType<T>>;
    groupBy<T extends estados_valvulaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: estados_valvulaGroupByArgs['orderBy'];
    } : {
        orderBy?: estados_valvulaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, estados_valvulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstados_valvulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: estados_valvulaFieldRefs;
}
export interface Prisma__estados_valvulaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuarios<T extends Prisma.estados_valvula$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.estados_valvula$usuariosArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    zonas<T extends Prisma.zonasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonasDefaultArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface estados_valvulaFieldRefs {
    readonly id: Prisma.FieldRef<"estados_valvula", 'Int'>;
    readonly codigo_zona: Prisma.FieldRef<"estados_valvula", 'String'>;
    readonly estado: Prisma.FieldRef<"estados_valvula", 'estados_valvula_estado'>;
    readonly fecha: Prisma.FieldRef<"estados_valvula", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"estados_valvula", 'DateTime'>;
    readonly motivo: Prisma.FieldRef<"estados_valvula", 'estados_valvula_motivo'>;
    readonly id_usuario: Prisma.FieldRef<"estados_valvula", 'Int'>;
}
export type estados_valvulaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where: Prisma.estados_valvulaWhereUniqueInput;
};
export type estados_valvulaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where: Prisma.estados_valvulaWhereUniqueInput;
};
export type estados_valvulaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where?: Prisma.estados_valvulaWhereInput;
    orderBy?: Prisma.estados_valvulaOrderByWithRelationInput | Prisma.estados_valvulaOrderByWithRelationInput[];
    cursor?: Prisma.estados_valvulaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_valvulaScalarFieldEnum | Prisma.Estados_valvulaScalarFieldEnum[];
};
export type estados_valvulaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where?: Prisma.estados_valvulaWhereInput;
    orderBy?: Prisma.estados_valvulaOrderByWithRelationInput | Prisma.estados_valvulaOrderByWithRelationInput[];
    cursor?: Prisma.estados_valvulaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_valvulaScalarFieldEnum | Prisma.Estados_valvulaScalarFieldEnum[];
};
export type estados_valvulaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where?: Prisma.estados_valvulaWhereInput;
    orderBy?: Prisma.estados_valvulaOrderByWithRelationInput | Prisma.estados_valvulaOrderByWithRelationInput[];
    cursor?: Prisma.estados_valvulaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_valvulaScalarFieldEnum | Prisma.Estados_valvulaScalarFieldEnum[];
};
export type estados_valvulaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.estados_valvulaCreateInput, Prisma.estados_valvulaUncheckedCreateInput>;
};
export type estados_valvulaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.estados_valvulaCreateManyInput | Prisma.estados_valvulaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type estados_valvulaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.estados_valvulaUpdateInput, Prisma.estados_valvulaUncheckedUpdateInput>;
    where: Prisma.estados_valvulaWhereUniqueInput;
};
export type estados_valvulaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.estados_valvulaUpdateManyMutationInput, Prisma.estados_valvulaUncheckedUpdateManyInput>;
    where?: Prisma.estados_valvulaWhereInput;
    limit?: number;
};
export type estados_valvulaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where: Prisma.estados_valvulaWhereUniqueInput;
    create: Prisma.XOR<Prisma.estados_valvulaCreateInput, Prisma.estados_valvulaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.estados_valvulaUpdateInput, Prisma.estados_valvulaUncheckedUpdateInput>;
};
export type estados_valvulaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
    where: Prisma.estados_valvulaWhereUniqueInput;
};
export type estados_valvulaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_valvulaWhereInput;
    limit?: number;
};
export type estados_valvula$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
};
export type estados_valvulaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_valvulaSelect<ExtArgs> | null;
    omit?: Prisma.estados_valvulaOmit<ExtArgs> | null;
    include?: Prisma.estados_valvulaInclude<ExtArgs> | null;
};
