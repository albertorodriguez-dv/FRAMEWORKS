import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type lecturasModel = runtime.Types.Result.DefaultSelection<Prisma.$lecturasPayload>;
export type AggregateLecturas = {
    _count: LecturasCountAggregateOutputType | null;
    _avg: LecturasAvgAggregateOutputType | null;
    _sum: LecturasSumAggregateOutputType | null;
    _min: LecturasMinAggregateOutputType | null;
    _max: LecturasMaxAggregateOutputType | null;
};
export type LecturasAvgAggregateOutputType = {
    id: number | null;
    temperatura_c: runtime.Decimal | null;
    humedad_suelo: runtime.Decimal | null;
    litros: runtime.Decimal | null;
};
export type LecturasSumAggregateOutputType = {
    id: number | null;
    temperatura_c: runtime.Decimal | null;
    humedad_suelo: runtime.Decimal | null;
    litros: runtime.Decimal | null;
};
export type LecturasMinAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    fecha: Date | null;
    hora: Date | null;
    temperatura_c: runtime.Decimal | null;
    humedad_suelo: runtime.Decimal | null;
    litros: runtime.Decimal | null;
};
export type LecturasMaxAggregateOutputType = {
    id: number | null;
    codigo_zona: string | null;
    fecha: Date | null;
    hora: Date | null;
    temperatura_c: runtime.Decimal | null;
    humedad_suelo: runtime.Decimal | null;
    litros: runtime.Decimal | null;
};
export type LecturasCountAggregateOutputType = {
    id: number;
    codigo_zona: number;
    fecha: number;
    hora: number;
    temperatura_c: number;
    humedad_suelo: number;
    litros: number;
    _all: number;
};
export type LecturasAvgAggregateInputType = {
    id?: true;
    temperatura_c?: true;
    humedad_suelo?: true;
    litros?: true;
};
export type LecturasSumAggregateInputType = {
    id?: true;
    temperatura_c?: true;
    humedad_suelo?: true;
    litros?: true;
};
export type LecturasMinAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    fecha?: true;
    hora?: true;
    temperatura_c?: true;
    humedad_suelo?: true;
    litros?: true;
};
export type LecturasMaxAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    fecha?: true;
    hora?: true;
    temperatura_c?: true;
    humedad_suelo?: true;
    litros?: true;
};
export type LecturasCountAggregateInputType = {
    id?: true;
    codigo_zona?: true;
    fecha?: true;
    hora?: true;
    temperatura_c?: true;
    humedad_suelo?: true;
    litros?: true;
    _all?: true;
};
export type LecturasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturasWhereInput;
    orderBy?: Prisma.lecturasOrderByWithRelationInput | Prisma.lecturasOrderByWithRelationInput[];
    cursor?: Prisma.lecturasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LecturasCountAggregateInputType;
    _avg?: LecturasAvgAggregateInputType;
    _sum?: LecturasSumAggregateInputType;
    _min?: LecturasMinAggregateInputType;
    _max?: LecturasMaxAggregateInputType;
};
export type GetLecturasAggregateType<T extends LecturasAggregateArgs> = {
    [P in keyof T & keyof AggregateLecturas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLecturas[P]> : Prisma.GetScalarType<T[P], AggregateLecturas[P]>;
};
export type lecturasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturasWhereInput;
    orderBy?: Prisma.lecturasOrderByWithAggregationInput | Prisma.lecturasOrderByWithAggregationInput[];
    by: Prisma.LecturasScalarFieldEnum[] | Prisma.LecturasScalarFieldEnum;
    having?: Prisma.lecturasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LecturasCountAggregateInputType | true;
    _avg?: LecturasAvgAggregateInputType;
    _sum?: LecturasSumAggregateInputType;
    _min?: LecturasMinAggregateInputType;
    _max?: LecturasMaxAggregateInputType;
};
export type LecturasGroupByOutputType = {
    id: number;
    codigo_zona: string;
    fecha: Date;
    hora: Date;
    temperatura_c: runtime.Decimal | null;
    humedad_suelo: runtime.Decimal | null;
    litros: runtime.Decimal;
    _count: LecturasCountAggregateOutputType | null;
    _avg: LecturasAvgAggregateOutputType | null;
    _sum: LecturasSumAggregateOutputType | null;
    _min: LecturasMinAggregateOutputType | null;
    _max: LecturasMaxAggregateOutputType | null;
};
export type GetLecturasGroupByPayload<T extends lecturasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LecturasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LecturasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LecturasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LecturasGroupByOutputType[P]>;
}>>;
export type lecturasWhereInput = {
    AND?: Prisma.lecturasWhereInput | Prisma.lecturasWhereInput[];
    OR?: Prisma.lecturasWhereInput[];
    NOT?: Prisma.lecturasWhereInput | Prisma.lecturasWhereInput[];
    id?: Prisma.IntFilter<"lecturas"> | number;
    codigo_zona?: Prisma.StringFilter<"lecturas"> | string;
    fecha?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    hora?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    temperatura_c?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
};
export type lecturasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrderInput | Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrderInput | Prisma.SortOrder;
    litros?: Prisma.SortOrder;
    zonas?: Prisma.zonasOrderByWithRelationInput;
    _relevance?: Prisma.lecturasOrderByRelevanceInput;
};
export type lecturasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    codigo_zona_fecha_hora?: Prisma.lecturasCodigo_zonaFechaHoraCompoundUniqueInput;
    AND?: Prisma.lecturasWhereInput | Prisma.lecturasWhereInput[];
    OR?: Prisma.lecturasWhereInput[];
    NOT?: Prisma.lecturasWhereInput | Prisma.lecturasWhereInput[];
    codigo_zona?: Prisma.StringFilter<"lecturas"> | string;
    fecha?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    hora?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    temperatura_c?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.XOR<Prisma.ZonasScalarRelationFilter, Prisma.zonasWhereInput>;
}, "id" | "codigo_zona_fecha_hora">;
export type lecturasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrderInput | Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrderInput | Prisma.SortOrder;
    litros?: Prisma.SortOrder;
    _count?: Prisma.lecturasCountOrderByAggregateInput;
    _avg?: Prisma.lecturasAvgOrderByAggregateInput;
    _max?: Prisma.lecturasMaxOrderByAggregateInput;
    _min?: Prisma.lecturasMinOrderByAggregateInput;
    _sum?: Prisma.lecturasSumOrderByAggregateInput;
};
export type lecturasScalarWhereWithAggregatesInput = {
    AND?: Prisma.lecturasScalarWhereWithAggregatesInput | Prisma.lecturasScalarWhereWithAggregatesInput[];
    OR?: Prisma.lecturasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lecturasScalarWhereWithAggregatesInput | Prisma.lecturasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"lecturas"> | number;
    codigo_zona?: Prisma.StringWithAggregatesFilter<"lecturas"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"lecturas"> | Date | string;
    hora?: Prisma.DateTimeWithAggregatesFilter<"lecturas"> | Date | string;
    temperatura_c?: Prisma.DecimalNullableWithAggregatesFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.DecimalNullableWithAggregatesFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalWithAggregatesFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasCreateInput = {
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas: Prisma.zonasCreateNestedOneWithoutLecturasInput;
};
export type lecturasUncheckedCreateInput = {
    id?: number;
    codigo_zona: string;
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.zonasUpdateOneRequiredWithoutLecturasNestedInput;
};
export type lecturasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasCreateManyInput = {
    id?: number;
    codigo_zona: string;
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasOrderByRelevanceInput = {
    fields: Prisma.lecturasOrderByRelevanceFieldEnum | Prisma.lecturasOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type lecturasCodigo_zonaFechaHoraCompoundUniqueInput = {
    codigo_zona: string;
    fecha: Date | string;
    hora: Date | string;
};
export type lecturasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrder;
    litros?: Prisma.SortOrder;
};
export type lecturasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrder;
    litros?: Prisma.SortOrder;
};
export type lecturasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrder;
    litros?: Prisma.SortOrder;
};
export type lecturasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo_zona?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrder;
    litros?: Prisma.SortOrder;
};
export type lecturasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperatura_c?: Prisma.SortOrder;
    humedad_suelo?: Prisma.SortOrder;
    litros?: Prisma.SortOrder;
};
export type LecturasListRelationFilter = {
    every?: Prisma.lecturasWhereInput;
    some?: Prisma.lecturasWhereInput;
    none?: Prisma.lecturasWhereInput;
};
export type lecturasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput> | Prisma.lecturasCreateWithoutZonasInput[] | Prisma.lecturasUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.lecturasCreateOrConnectWithoutZonasInput | Prisma.lecturasCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.lecturasCreateManyZonasInputEnvelope;
    connect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
};
export type lecturasUncheckedCreateNestedManyWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput> | Prisma.lecturasCreateWithoutZonasInput[] | Prisma.lecturasUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.lecturasCreateOrConnectWithoutZonasInput | Prisma.lecturasCreateOrConnectWithoutZonasInput[];
    createMany?: Prisma.lecturasCreateManyZonasInputEnvelope;
    connect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
};
export type lecturasUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput> | Prisma.lecturasCreateWithoutZonasInput[] | Prisma.lecturasUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.lecturasCreateOrConnectWithoutZonasInput | Prisma.lecturasCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.lecturasUpsertWithWhereUniqueWithoutZonasInput | Prisma.lecturasUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.lecturasCreateManyZonasInputEnvelope;
    set?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    disconnect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    delete?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    connect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    update?: Prisma.lecturasUpdateWithWhereUniqueWithoutZonasInput | Prisma.lecturasUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.lecturasUpdateManyWithWhereWithoutZonasInput | Prisma.lecturasUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.lecturasScalarWhereInput | Prisma.lecturasScalarWhereInput[];
};
export type lecturasUncheckedUpdateManyWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput> | Prisma.lecturasCreateWithoutZonasInput[] | Prisma.lecturasUncheckedCreateWithoutZonasInput[];
    connectOrCreate?: Prisma.lecturasCreateOrConnectWithoutZonasInput | Prisma.lecturasCreateOrConnectWithoutZonasInput[];
    upsert?: Prisma.lecturasUpsertWithWhereUniqueWithoutZonasInput | Prisma.lecturasUpsertWithWhereUniqueWithoutZonasInput[];
    createMany?: Prisma.lecturasCreateManyZonasInputEnvelope;
    set?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    disconnect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    delete?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    connect?: Prisma.lecturasWhereUniqueInput | Prisma.lecturasWhereUniqueInput[];
    update?: Prisma.lecturasUpdateWithWhereUniqueWithoutZonasInput | Prisma.lecturasUpdateWithWhereUniqueWithoutZonasInput[];
    updateMany?: Prisma.lecturasUpdateManyWithWhereWithoutZonasInput | Prisma.lecturasUpdateManyWithWhereWithoutZonasInput[];
    deleteMany?: Prisma.lecturasScalarWhereInput | Prisma.lecturasScalarWhereInput[];
};
export type lecturasCreateWithoutZonasInput = {
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUncheckedCreateWithoutZonasInput = {
    id?: number;
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasCreateOrConnectWithoutZonasInput = {
    where: Prisma.lecturasWhereUniqueInput;
    create: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput>;
};
export type lecturasCreateManyZonasInputEnvelope = {
    data: Prisma.lecturasCreateManyZonasInput | Prisma.lecturasCreateManyZonasInput[];
    skipDuplicates?: boolean;
};
export type lecturasUpsertWithWhereUniqueWithoutZonasInput = {
    where: Prisma.lecturasWhereUniqueInput;
    update: Prisma.XOR<Prisma.lecturasUpdateWithoutZonasInput, Prisma.lecturasUncheckedUpdateWithoutZonasInput>;
    create: Prisma.XOR<Prisma.lecturasCreateWithoutZonasInput, Prisma.lecturasUncheckedCreateWithoutZonasInput>;
};
export type lecturasUpdateWithWhereUniqueWithoutZonasInput = {
    where: Prisma.lecturasWhereUniqueInput;
    data: Prisma.XOR<Prisma.lecturasUpdateWithoutZonasInput, Prisma.lecturasUncheckedUpdateWithoutZonasInput>;
};
export type lecturasUpdateManyWithWhereWithoutZonasInput = {
    where: Prisma.lecturasScalarWhereInput;
    data: Prisma.XOR<Prisma.lecturasUpdateManyMutationInput, Prisma.lecturasUncheckedUpdateManyWithoutZonasInput>;
};
export type lecturasScalarWhereInput = {
    AND?: Prisma.lecturasScalarWhereInput | Prisma.lecturasScalarWhereInput[];
    OR?: Prisma.lecturasScalarWhereInput[];
    NOT?: Prisma.lecturasScalarWhereInput | Prisma.lecturasScalarWhereInput[];
    id?: Prisma.IntFilter<"lecturas"> | number;
    codigo_zona?: Prisma.StringFilter<"lecturas"> | string;
    fecha?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    hora?: Prisma.DateTimeFilter<"lecturas"> | Date | string;
    temperatura_c?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.DecimalNullableFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFilter<"lecturas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasCreateManyZonasInput = {
    id?: number;
    fecha: Date | string;
    hora: Date | string;
    temperatura_c?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUpdateWithoutZonasInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUncheckedUpdateWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasUncheckedUpdateManyWithoutZonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    temperatura_c?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad_suelo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    litros?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type lecturasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo_zona?: boolean;
    fecha?: boolean;
    hora?: boolean;
    temperatura_c?: boolean;
    humedad_suelo?: boolean;
    litros?: boolean;
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lecturas"]>;
export type lecturasSelectScalar = {
    id?: boolean;
    codigo_zona?: boolean;
    fecha?: boolean;
    hora?: boolean;
    temperatura_c?: boolean;
    humedad_suelo?: boolean;
    litros?: boolean;
};
export type lecturasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo_zona" | "fecha" | "hora" | "temperatura_c" | "humedad_suelo" | "litros", ExtArgs["result"]["lecturas"]>;
export type lecturasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zonas?: boolean | Prisma.zonasDefaultArgs<ExtArgs>;
};
export type $lecturasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lecturas";
    objects: {
        zonas: Prisma.$zonasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        codigo_zona: string;
        fecha: Date;
        hora: Date;
        temperatura_c: runtime.Decimal | null;
        humedad_suelo: runtime.Decimal | null;
        litros: runtime.Decimal;
    }, ExtArgs["result"]["lecturas"]>;
    composites: {};
};
export type lecturasGetPayload<S extends boolean | null | undefined | lecturasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lecturasPayload, S>;
export type lecturasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lecturasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LecturasCountAggregateInputType | true;
};
export interface lecturasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lecturas'];
        meta: {
            name: 'lecturas';
        };
    };
    findUnique<T extends lecturasFindUniqueArgs>(args: Prisma.SelectSubset<T, lecturasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lecturasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lecturasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lecturasFindFirstArgs>(args?: Prisma.SelectSubset<T, lecturasFindFirstArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lecturasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lecturasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lecturasFindManyArgs>(args?: Prisma.SelectSubset<T, lecturasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lecturasCreateArgs>(args: Prisma.SelectSubset<T, lecturasCreateArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lecturasCreateManyArgs>(args?: Prisma.SelectSubset<T, lecturasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends lecturasDeleteArgs>(args: Prisma.SelectSubset<T, lecturasDeleteArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lecturasUpdateArgs>(args: Prisma.SelectSubset<T, lecturasUpdateArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lecturasDeleteManyArgs>(args?: Prisma.SelectSubset<T, lecturasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lecturasUpdateManyArgs>(args: Prisma.SelectSubset<T, lecturasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends lecturasUpsertArgs>(args: Prisma.SelectSubset<T, lecturasUpsertArgs<ExtArgs>>): Prisma.Prisma__lecturasClient<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lecturasCountArgs>(args?: Prisma.Subset<T, lecturasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LecturasCountAggregateOutputType> : number>;
    aggregate<T extends LecturasAggregateArgs>(args: Prisma.Subset<T, LecturasAggregateArgs>): Prisma.PrismaPromise<GetLecturasAggregateType<T>>;
    groupBy<T extends lecturasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lecturasGroupByArgs['orderBy'];
    } : {
        orderBy?: lecturasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lecturasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lecturasFieldRefs;
}
export interface Prisma__lecturasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zonas<T extends Prisma.zonasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonasDefaultArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lecturasFieldRefs {
    readonly id: Prisma.FieldRef<"lecturas", 'Int'>;
    readonly codigo_zona: Prisma.FieldRef<"lecturas", 'String'>;
    readonly fecha: Prisma.FieldRef<"lecturas", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"lecturas", 'DateTime'>;
    readonly temperatura_c: Prisma.FieldRef<"lecturas", 'Decimal'>;
    readonly humedad_suelo: Prisma.FieldRef<"lecturas", 'Decimal'>;
    readonly litros: Prisma.FieldRef<"lecturas", 'Decimal'>;
}
export type lecturasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where: Prisma.lecturasWhereUniqueInput;
};
export type lecturasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where: Prisma.lecturasWhereUniqueInput;
};
export type lecturasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where?: Prisma.lecturasWhereInput;
    orderBy?: Prisma.lecturasOrderByWithRelationInput | Prisma.lecturasOrderByWithRelationInput[];
    cursor?: Prisma.lecturasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LecturasScalarFieldEnum | Prisma.LecturasScalarFieldEnum[];
};
export type lecturasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where?: Prisma.lecturasWhereInput;
    orderBy?: Prisma.lecturasOrderByWithRelationInput | Prisma.lecturasOrderByWithRelationInput[];
    cursor?: Prisma.lecturasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LecturasScalarFieldEnum | Prisma.LecturasScalarFieldEnum[];
};
export type lecturasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where?: Prisma.lecturasWhereInput;
    orderBy?: Prisma.lecturasOrderByWithRelationInput | Prisma.lecturasOrderByWithRelationInput[];
    cursor?: Prisma.lecturasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LecturasScalarFieldEnum | Prisma.LecturasScalarFieldEnum[];
};
export type lecturasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lecturasCreateInput, Prisma.lecturasUncheckedCreateInput>;
};
export type lecturasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lecturasCreateManyInput | Prisma.lecturasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lecturasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lecturasUpdateInput, Prisma.lecturasUncheckedUpdateInput>;
    where: Prisma.lecturasWhereUniqueInput;
};
export type lecturasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lecturasUpdateManyMutationInput, Prisma.lecturasUncheckedUpdateManyInput>;
    where?: Prisma.lecturasWhereInput;
    limit?: number;
};
export type lecturasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where: Prisma.lecturasWhereUniqueInput;
    create: Prisma.XOR<Prisma.lecturasCreateInput, Prisma.lecturasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lecturasUpdateInput, Prisma.lecturasUncheckedUpdateInput>;
};
export type lecturasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
    where: Prisma.lecturasWhereUniqueInput;
};
export type lecturasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturasWhereInput;
    limit?: number;
};
export type lecturasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturasSelect<ExtArgs> | null;
    omit?: Prisma.lecturasOmit<ExtArgs> | null;
    include?: Prisma.lecturasInclude<ExtArgs> | null;
};
