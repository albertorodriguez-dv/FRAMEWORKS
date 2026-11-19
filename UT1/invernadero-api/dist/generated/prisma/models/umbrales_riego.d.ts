import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type umbrales_riegoModel = runtime.Types.Result.DefaultSelection<Prisma.$umbrales_riegoPayload>;
export type AggregateUmbrales_riego = {
    _count: Umbrales_riegoCountAggregateOutputType | null;
    _avg: Umbrales_riegoAvgAggregateOutputType | null;
    _sum: Umbrales_riegoSumAggregateOutputType | null;
    _min: Umbrales_riegoMinAggregateOutputType | null;
    _max: Umbrales_riegoMaxAggregateOutputType | null;
};
export type Umbrales_riegoAvgAggregateOutputType = {
    id: number | null;
    humedad_seca: runtime.Decimal | null;
    humedad_objetivo: runtime.Decimal | null;
    id_usuario: number | null;
};
export type Umbrales_riegoSumAggregateOutputType = {
    id: number | null;
    humedad_seca: runtime.Decimal | null;
    humedad_objetivo: runtime.Decimal | null;
    id_usuario: number | null;
};
export type Umbrales_riegoMinAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    humedad_seca: runtime.Decimal | null;
    humedad_objetivo: runtime.Decimal | null;
    fecha_hora: Date | null;
    id_usuario: number | null;
};
export type Umbrales_riegoMaxAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    humedad_seca: runtime.Decimal | null;
    humedad_objetivo: runtime.Decimal | null;
    fecha_hora: Date | null;
    id_usuario: number | null;
};
export type Umbrales_riegoCountAggregateOutputType = {
    id: number;
    codigo_zona: number;
    humedad_seca: number;
    humedad_objetivo: number;
    fecha_hora: number;
    id_usuario: number;
    _all: number;
};
export type Umbrales_riegoAvgAggregateInputType = {
    id?: true;
    humedad_seca?: true;
    humedad_objetivo?: true;
    id_usuario?: true;
};
export type Umbrales_riegoSumAggregateInputType = {
    id?: true;
    humedad_seca?: true;
    humedad_objetivo?: true;
    id_usuario?: true;
};
export type Umbrales_riegoMinAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    humedad_seca?: true;
    humedad_objetivo?: true;
    fecha_hora?: true;
    id_usuario?: true;
};
export type Umbrales_riegoMaxAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    humedad_seca?: true;
    humedad_objetivo?: true;
    fecha_hora?: true;
    id_usuario?: true;
};
export type Umbrales_riegoCountAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    humedad_seca?: true;
    humedad_objetivo?: true;
    fecha_hora?: true;
    id_usuario?: true;
    _all?: true;
};
export type Umbrales_riegoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.umbrales_riegoWhereInput;
    orderBy?: Prisma.umbrales_riegoOrderByWithRelationInput | Prisma.umbrales_riegoOrderByWithRelationInput[];
    cursor?: Prisma.umbrales_riegoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Umbrales_riegoCountAggregateInputType;
    _avg?: Umbrales_riegoAvgAggregateInputType;
    _sum?: Umbrales_riegoSumAggregateInputType;
    _min?: Umbrales_riegoMinAggregateInputType;
    _max?: Umbrales_riegoMaxAggregateInputType;
};
export type GetUmbrales_riegoAggregateType<T extends Umbrales_riegoAggregateArgs> = {
    [P in keyof T & keyof AggregateUmbrales_riego]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUmbrales_riego[P]> : Prisma.GetScalarType<T[P], AggregateUmbrales_riego[P]>;
};
export type umbrales_riegoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.umbrales_riegoWhereInput;
    orderBy?: Prisma.umbrales_riegoOrderByWithAggregationInput | Prisma.umbrales_riegoOrderByWithAggregationInput[];
    by: Prisma.Umbrales_riegoScalarFieldEnum[] | Prisma.Umbrales_riegoScalarFieldEnum;
    having?: Prisma.umbrales_riegoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Umbrales_riegoCountAggregateInputType | true;
    _avg?: Umbrales_riegoAvgAggregateInputType;
    _sum?: Umbrales_riegoSumAggregateInputType;
    _min?: Umbrales_riegoMinAggregateInputType;
    _max?: Umbrales_riegoMaxAggregateInputType;
};
export type Umbrales_riegoGroupByOutputType = {
    id: number;
    codigo_zona: string;
    humedad_seca: runtime.Decimal;
    humedad_objetivo: runtime.Decimal;
    fecha_hora: Date;
    id_usuario: number | null;
    _count: Umbrales_riegoCountAggregateOutputType | null;
    _avg: Umbrales_riegoAvgAggregateOutputType | null;
    _sum: Umbrales_riegoSumAggregateOutputType | null;
    _min: Umbrales_riegoMinAggregateOutputType | null;
    _max: Umbrales_riegoMaxAggregateOutputType | null;
};
export type GetUmbrales_riegoGroupByPayload<T extends umbrales_riegoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Umbrales_riegoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Umbrales_riegoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Umbrales_riegoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Umbrales_riegoGroupByOutputType[P]>;
}>>;
export type umbrales_riegoWhereInput = {
    AND?: Prisma.umbrales_riegoWhereInput | Prisma.umbrales_riegoWhereInput[];
    OR?: Prisma.umbrales_riegoWhereInput[];
    NOT?: Prisma.umbrales_riegoWhereInput | Prisma.umbrales_riegoWhereInput[];
    id?: Prisma.IntFilter<"umbrales_riego"> | number;
    codigo_zona?: Prisma.StringFilter<"umbrales_riego"> | string;
    humedad_seca?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFilter<"umbrales_riego"> | Date | string;
    id_usuario?: Prisma.IntNullableFilter<"umbrales_riego"> | number | null;
    usuarios?: Prisma.XOR<Prisma.UsuariosNullableScalarRelationFilter, Prisma.usuariosWhereInput> | null;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
};
export type umbrales_riegoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarios?: Prisma.usuariosOrderByWithRelationInput;
    zonas?: Prisma.zonasOrderByWithRelationInput;
    _relevance?: Prisma.umbrales_riegoOrderByRelevanceInput;
};
export type umbrales_riegoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.umbrales_riegoWhereInput | Prisma.umbrales_riegoWhereInput[];
    OR?: Prisma.umbrales_riegoWhereInput[];
    NOT?: Prisma.umbrales_riegoWhereInput | Prisma.umbrales_riegoWhereInput[];
    codigo_zona?: Prisma.StringFilter<"umbrales_riego"> | string;
    humedad_seca?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFilter<"umbrales_riego"> | Date | string;
    id_usuario?: Prisma.IntNullableFilter<"umbrales_riego"> | number | null;
    usuarios?: Prisma.XOR<Prisma.UsuariosNullableScalarRelationFilter, Prisma.usuariosWhereInput> | null;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
}, "id">;
export type umbrales_riegoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.umbrales_riegoCountOrderByAggregateInput;
    _avg?: Prisma.umbrales_riegoAvgOrderByAggregateInput;
    _max?: Prisma.umbrales_riegoMaxOrderByAggregateInput;
    _min?: Prisma.umbrales_riegoMinOrderByAggregateInput;
    _sum?: Prisma.umbrales_riegoSumOrderByAggregateInput;
};
export type umbrales_riegoScalarWhereWithAggregatesInput = {
    AND?: Prisma.umbrales_riegoScalarWhereWithAggregatesInput | Prisma.umbrales_riegoScalarWhereWithAggregatesInput[];
    OR?: Prisma.umbrales_riegoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.umbrales_riegoScalarWhereWithAggregatesInput | Prisma.umbrales_riegoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"umbrales_riego"> | number;
    codigo_zona?: Prisma.StringWithAggregatesFilter<"umbrales_riego"> | string;
    humedad_seca?: Prisma.DecimalWithAggregatesFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalWithAggregatesFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeWithAggregatesFilter<"umbrales_riego"> | Date | string;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"umbrales_riego"> | number | null;
};
export type umbrales_riegoCreateInput = {
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    usuarios?: Prisma.usuariosCreateNestedOneWithoutUmbrales_riegoInput;
    zonas: Prisma.zonasCreateNestedOneWithoutUmbrales_riegoInput;
};
export type umbrales_riegoUncheckedCreateInput = {
    id?: number;
    codigo_zona: string;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    id_usuario?: number | null;
};
export type umbrales_riegoUpdateInput = {
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.usuariosUpdateOneWithoutUmbrales_riegoNestedInput;
    zonas?: Prisma.zonasUpdateOneRequiredWithoutUmbrales_riegoNestedInput;
};
export type umbrales_riegoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type umbrales_riegoCreateManyInput = {
    id?: number;
    codigo_zona: string;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    id_usuario?: number | null;
};
export type umbrales_riegoUpdateManyMutationInput = {
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type umbrales_riegoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type umbrales_riegoOrderByRelevanceInput = {
    fields: Prisma.umbrales_riegoOrderByRelevanceFieldEnum | Prisma.umbrales_riegoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type umbrales_riegoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type umbrales_riegoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type umbrales_riegoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type umbrales_riegoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type umbrales_riegoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    humedad_seca?: Prisma.SortOrder;
    humedad_objetivo?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type Umbrales_riegoListRelationFilter = {
    every?: Prisma.umbrales_riegoWhereInput;
    some?: Prisma.umbrales_riegoWhereInput;
    none?: Prisma.umbrales_riegoWhereInput;
};
export type umbrales_riegoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type umbrales_riegoCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput> | Prisma.umbrales_riegoCreateWithoutUsuariosInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput | Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.umbrales_riegoCreateManyUsuariosInputEnvelope;
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
};
export type umbrales_riegoUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput> | Prisma.umbrales_riegoCreateWithoutUsuariosInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput | Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput[];
    createMany?: Prisma.umbrales_riegoCreateManyUsuariosInputEnvelope;
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
};
export type umbrales_riegoUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput> | Prisma.umbrales_riegoCreateWithoutUsuariosInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput | Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.umbrales_riegoCreateManyUsuariosInputEnvelope;
    set?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    disconnect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    delete?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    update?: Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.umbrales_riegoUpdateManyWithWhereWithoutUsuariosInput | Prisma.umbrales_riegoUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
};
export type umbrales_riegoUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput> | Prisma.umbrales_riegoCreateWithoutUsuariosInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput | Prisma.umbrales_riegoCreateOrConnectWithoutUsuariosInput[];
    upsert?: Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutUsuariosInput | Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutUsuariosInput[];
    createMany?: Prisma.umbrales_riegoCreateManyUsuariosInputEnvelope;
    set?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    disconnect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    delete?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    update?: Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutUsuariosInput | Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutUsuariosInput[];
    updateMany?: Prisma.umbrales_riegoUpdateManyWithWhereWithoutUsuariosInput | Prisma.umbrales_riegoUpdateManyWithWhereWithoutUsuariosInput[];
    deleteMany?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
};
export type umbrales_riegoCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput> | Prisma.umbrales_riegoCreateWithoutZonasInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput | Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.umbrales_riegoCreateManyZonasInputEnvelope;
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
};
export type umbrales_riegoUncheckedCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput> | Prisma.umbrales_riegoCreateWithoutZonasInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput | Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.umbrales_riegoCreateManyZonasInputEnvelope;
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
};
export type umbrales_riegoUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput> | Prisma.umbrales_riegoCreateWithoutZonasInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput | Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutZonasInput | Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.umbrales_riegoCreateManyZonasInputEnvelope;
    set?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    disconnect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    delete?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    update?: Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutZonasInput | Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.umbrales_riegoUpdateManyWithWhereWithoutZonasInput | Prisma.umbrales_riegoUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
};
export type umbrales_riegoUncheckedUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput> | Prisma.umbrales_riegoCreateWithoutZonasInput[] | Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput | Prisma.umbrales_riegoCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutZonasInput | Prisma.umbrales_riegoUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.umbrales_riegoCreateManyZonasInputEnvelope;
    set?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    disconnect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    delete?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    connect?: Prisma.umbrales_riegoWhereUniqueInput | Prisma.umbrales_riegoWhereUniqueInput[];
    update?: Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutZonasInput | Prisma.umbrales_riegoUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.umbrales_riegoUpdateManyWithWhereWithoutZonasInput | Prisma.umbrales_riegoUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
};
export type umbrales_riegoCreateWithoutUsuariosInput = {
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    zonas: Prisma.zonasCreateNestedOneWithoutUmbrales_riegoInput;
};
export type umbrales_riegoUncheckedCreateWithoutUsuariosInput = {
    id?: number;
    codigo_zona: string;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
};
export type umbrales_riegoCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    create: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput>;
};
export type umbrales_riegoCreateManyUsuariosInputEnvelope = {
    data: Prisma.umbrales_riegoCreateManyUsuariosInput | Prisma.umbrales_riegoCreateManyUsuariosInput[];
    skipDuplicates?: boolean;
};
export type umbrales_riegoUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    update: Prisma.XOR<Prisma.umbrales_riegoUpdateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedCreateWithoutUsuariosInput>;
};
export type umbrales_riegoUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateWithoutUsuariosInput, Prisma.umbrales_riegoUncheckedUpdateWithoutUsuariosInput>;
};
export type umbrales_riegoUpdateManyWithWhereWithoutUsuariosInput = {
    where: Prisma.umbrales_riegoScalarWhereInput;
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateManyMutationInput, Prisma.umbrales_riegoUncheckedUpdateManyWithoutUsuariosInput>;
};
export type umbrales_riegoScalarWhereInput = {
    AND?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
    OR?: Prisma.umbrales_riegoScalarWhereInput[];
    NOT?: Prisma.umbrales_riegoScalarWhereInput | Prisma.umbrales_riegoScalarWhereInput[];
    id?: Prisma.IntFilter<"umbrales_riego"> | number;
    codigo_zona?: Prisma.StringFilter<"umbrales_riego"> | string;
    humedad_seca?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFilter<"umbrales_riego"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFilter<"umbrales_riego"> | Date | string;
    id_usuario?: Prisma.IntNullableFilter<"umbrales_riego"> | number | null;
};
export type umbrales_riegoCreateWithoutZonasInput = {
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    usuarios?: Prisma.usuariosCreateNestedOneWithoutUmbrales_riegoInput;
};
export type umbrales_riegoUncheckedCreateWithoutZonasInput = {
    id?: number;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    id_usuario?: number | null;
};
export type umbrales_riegoCreateOrConnectWithoutZonasInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    create: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput>;
};
export type umbrales_riegoCreateManyZonasInputEnvelope = {
    data: Prisma.umbrales_riegoCreateManyZonasInput | Prisma.umbrales_riegoCreateManyZonasInput[];
    skipDuplicates?: boolean;
};
export type umbrales_riegoUpsertWithWhereUniqueWithoutZonasInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    update: Prisma.XOR<Prisma.umbrales_riegoUpdateWithoutZonasInput, Prisma.umbrales_riegoUncheckedUpdateWithoutZonasInput>;
    create: Prisma.XOR<Prisma.umbrales_riegoCreateWithoutZonasInput, Prisma.umbrales_riegoUncheckedCreateWithoutZonasInput>;
};
export type umbrales_riegoUpdateWithWhereUniqueWithoutZonasInput = {
    where: Prisma.umbrales_riegoWhereUniqueInput;
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateWithoutZonasInput, Prisma.umbrales_riegoUncheckedUpdateWithoutZonasInput>;
};
export type umbrales_riegoUpdateManyWithWhereWithoutZonasInput = {
    where: Prisma.umbrales_riegoScalarWhereInput;
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateManyMutationInput, Prisma.umbrales_riegoUncheckedUpdateManyWithoutZonasInput>;
};
export type umbrales_riegoCreateManyUsuariosInput = {
    id?: number;
    codigo_zona: string;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
};
export type umbrales_riegoUpdateWithoutUsuariosInput = {
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonas?: Prisma.zonasUpdateOneRequiredWithoutUmbrales_riegoNestedInput;
};
export type umbrales_riegoUncheckedUpdateWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type umbrales_riegoUncheckedUpdateManyWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type umbrales_riegoCreateManyZonasInput = {
    id?: number;
    humedad_seca: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora: Date | string;
    id_usuario?: number | null;
};
export type umbrales_riegoUpdateWithoutZonasInput = {
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.usuariosUpdateOneWithoutUmbrales_riegoNestedInput;
};
export type umbrales_riegoUncheckedUpdateWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type umbrales_riegoUncheckedUpdateManyWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    humedad_seca?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_objetivo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type umbrales_riegoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo_zona?: boolean;
    humedad_seca?: boolean;
    humedad_objetivo?: boolean;
    fecha_hora?: boolean;
    id_usuario?: boolean;
    usuarios?: boolean | Prisma.umbrales_riego$usuariosArgs<ExtArgs>;
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["umbrales_riego"]>;
export type umbrales_riegoSelectScalar = {
    id?: boolean;
    codigo_zona?: boolean;
    humedad_seca?: boolean;
    humedad_objetivo?: boolean;
    fecha_hora?: boolean;
    id_usuario?: boolean;
};
export type umbrales_riegoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo_zona" | "humedad_seca" | "humedad_objetivo" | "fecha_hora" | "id_usuario", ExtArgs["result"]["umbrales_riego"]>;
export type umbrales_riegoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | Prisma.umbrales_riego$usuariosArgs<ExtArgs>;
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
};
export type $umbrales_riegoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "umbrales_riego";
    objects: {
        usuarios: Prisma.$usuariosPayload<ExtArgs> | null;
        zonas: Prisma.$zonasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        codigo_zona: string;
        humedad_seca: runtime.Decimal;
        humedad_objetivo: runtime.Decimal;
        fecha_hora: Date;
        id_usuario: number | null;
    }, ExtArgs["result"]["umbrales_riego"]>;
    composites: {};
};
export type umbrales_riegoGetPayload<S extends boolean | null | undefined | umbrales_riegoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload, S>;
export type umbrales_riegoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<umbrales_riegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Umbrales_riegoCountAggregateInputType | true;
};
export interface umbrales_riegoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['umbrales_riego'];
        meta: {
            name: 'umbrales_riego';
        };
    };
    findUnique<T extends umbrales_riegoFindUniqueArgs>(args: Prisma.SelectSubset<T, umbrales_riegoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends umbrales_riegoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, umbrales_riegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends umbrales_riegoFindFirstArgs>(args?: Prisma.SelectSubset<T, umbrales_riegoFindFirstArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends umbrales_riegoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, umbrales_riegoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends umbrales_riegoFindManyArgs>(args?: Prisma.SelectSubset<T, umbrales_riegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends umbrales_riegoCreateArgs>(args: Prisma.SelectSubset<T, umbrales_riegoCreateArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends umbrales_riegoCreateManyArgs>(args?: Prisma.SelectSubset<T, umbrales_riegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends umbrales_riegoDeleteArgs>(args: Prisma.SelectSubset<T, umbrales_riegoDeleteArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends umbrales_riegoUpdateArgs>(args: Prisma.SelectSubset<T, umbrales_riegoUpdateArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends umbrales_riegoDeleteManyArgs>(args?: Prisma.SelectSubset<T, umbrales_riegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends umbrales_riegoUpdateManyArgs>(args: Prisma.SelectSubset<T, umbrales_riegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends umbrales_riegoUpsertArgs>(args: Prisma.SelectSubset<T, umbrales_riegoUpsertArgs<ExtArgs>>): Prisma.Prisma__umbrales_riegoClient<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends umbrales_riegoCountArgs>(args?: Prisma.Subset<T, umbrales_riegoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Umbrales_riegoCountAggregateOutputType> : number>;
    aggregate<T extends Umbrales_riegoAggregateArgs>(args: Prisma.Subset<T, Umbrales_riegoAggregateArgs>): Prisma.PrismaPromise<GetUmbrales_riegoAggregateType<T>>;
    groupBy<T extends umbrales_riegoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: umbrales_riegoGroupByArgs['orderBy'];
    } : {
        orderBy?: umbrales_riegoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, umbrales_riegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUmbrales_riegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: umbrales_riegoFieldRefs;
}
export interface Prisma__umbrales_riegoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuarios<T extends Prisma.umbrales_riego$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.umbrales_riego$usuariosArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    zonas<T extends Prisma.zonasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonasDefaultArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface umbrales_riegoFieldRefs {
    readonly id: Prisma.FieldRef<"umbrales_riego", 'Int'>;
    readonly codigo_zona: Prisma.FieldRef<"umbrales_riego", 'String'>;
    readonly humedad_seca: Prisma.FieldRef<"umbrales_riego", 'Decimal'>;
    readonly humedad_objetivo: Prisma.FieldRef<"umbrales_riego", 'Decimal'>;
    readonly fecha_hora: Prisma.FieldRef<"umbrales_riego", 'DateTime'>;
    readonly id_usuario: Prisma.FieldRef<"umbrales_riego", 'Int'>;
}
export type umbrales_riegoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where: Prisma.umbrales_riegoWhereUniqueInput;
};
export type umbrales_riegoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where: Prisma.umbrales_riegoWhereUniqueInput;
};
export type umbrales_riegoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where?: Prisma.umbrales_riegoWhereInput;
    orderBy?: Prisma.umbrales_riegoOrderByWithRelationInput | Prisma.umbrales_riegoOrderByWithRelationInput[];
    cursor?: Prisma.umbrales_riegoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Umbrales_riegoScalarFieldEnum | Prisma.Umbrales_riegoScalarFieldEnum[];
};
export type umbrales_riegoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where?: Prisma.umbrales_riegoWhereInput;
    orderBy?: Prisma.umbrales_riegoOrderByWithRelationInput | Prisma.umbrales_riegoOrderByWithRelationInput[];
    cursor?: Prisma.umbrales_riegoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Umbrales_riegoScalarFieldEnum | Prisma.Umbrales_riegoScalarFieldEnum[];
};
export type umbrales_riegoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where?: Prisma.umbrales_riegoWhereInput;
    orderBy?: Prisma.umbrales_riegoOrderByWithRelationInput | Prisma.umbrales_riegoOrderByWithRelationInput[];
    cursor?: Prisma.umbrales_riegoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Umbrales_riegoScalarFieldEnum | Prisma.Umbrales_riegoScalarFieldEnum[];
};
export type umbrales_riegoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.umbrales_riegoCreateInput, Prisma.umbrales_riegoUncheckedCreateInput>;
};
export type umbrales_riegoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.umbrales_riegoCreateManyInput | Prisma.umbrales_riegoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type umbrales_riegoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateInput, Prisma.umbrales_riegoUncheckedUpdateInput>;
    where: Prisma.umbrales_riegoWhereUniqueInput;
};
export type umbrales_riegoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.umbrales_riegoUpdateManyMutationInput, Prisma.umbrales_riegoUncheckedUpdateManyInput>;
    where?: Prisma.umbrales_riegoWhereInput;
    limit?: number;
};
export type umbrales_riegoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where: Prisma.umbrales_riegoWhereUniqueInput;
    create: Prisma.XOR<Prisma.umbrales_riegoCreateInput, Prisma.umbrales_riegoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.umbrales_riegoUpdateInput, Prisma.umbrales_riegoUncheckedUpdateInput>;
};
export type umbrales_riegoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
    where: Prisma.umbrales_riegoWhereUniqueInput;
};
export type umbrales_riegoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.umbrales_riegoWhereInput;
    limit?: number;
};
export type umbrales_riego$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
};
export type umbrales_riegoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.umbrales_riegoSelect<ExtArgs> | null;
    omit?: Prisma.umbrales_riegoOmit<ExtArgs> | null;
    include?: Prisma.umbrales_riegoInclude<ExtArgs> | null;
};
