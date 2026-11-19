import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type zonasModel = runtime.Types.Result.DefaultSelection<Prisma.$zonasPayload>;
export type AggregateZonas = {
    _count: ZonasCountAggregateOutputType | null;
    _avg: ZonasAvgAggregateOutputType | null;
    _sum: ZonasSumAggregateOutputType | null;
    _min: ZonasMinAggregateOutputType | null;
    _max: ZonasMaxAggregateOutputType | null;
};
export type ZonasAvgAggregateOutputType = {
    id_cultivo: number | null;
    superficie_m2: runtime.Decimal | null;
    caudal_l_min: runtime.Decimal | null;
};
export type ZonasSumAggregateOutputType = {
    id_cultivo: number | null;
    superficie_m2: runtime.Decimal | null;
    caudal_l_min: runtime.Decimal | null;
};
export type ZonasMinAggregateOutputType = {
    codigo_zona: string | null;
    nombre: string | null;
    id_cultivo: number | null;
    superficie_m2: runtime.Decimal | null;
    caudal_l_min: runtime.Decimal | null;
};
export type ZonasMaxAggregateOutputType = {
    codigo_zona: string | null;
    nombre: string | null;
    id_cultivo: number | null;
    superficie_m2: runtime.Decimal | null;
    caudal_l_min: runtime.Decimal | null;
};
export type ZonasCountAggregateOutputType = {
    codigo_zona: number;
    nombre: number;
    id_cultivo: number;
    superficie_m2: number;
    caudal_l_min: number;
    _all: number;
};
export type ZonasAvgAggregateInputType = {
    id_cultivo?: true;
    superficie_m2?: true;
    caudal_l_min?: true;
};
export type ZonasSumAggregateInputType = {
    id_cultivo?: true;
    superficie_m2?: true;
    caudal_l_min?: true;
};
export type ZonasMinAggregateInputType = {
    codigo_zona?: true;
    nombre?: true;
    id_cultivo?: true;
    superficie_m2?: true;
    caudal_l_min?: true;
};
export type ZonasMaxAggregateInputType = {
    codigo_zona?: true;
    nombre?: true;
    id_cultivo?: true;
    superficie_m2?: true;
    caudal_l_min?: true;
};
export type ZonasCountAggregateInputType = {
    codigo_zona?: true;
    nombre?: true;
    id_cultivo?: true;
    superficie_m2?: true;
    caudal_l_min?: true;
    _all?: true;
};
export type ZonasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zonasWhereInput;
    orderBy?: Prisma.zonasOrderByWithRelationInput | Prisma.zonasOrderByWithRelationInput[];
    cursor?: Prisma.zonasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZonasCountAggregateInputType;
    _avg?: ZonasAvgAggregateInputType;
    _sum?: ZonasSumAggregateInputType;
    _min?: ZonasMinAggregateInputType;
    _max?: ZonasMaxAggregateInputType;
};
export type GetZonasAggregateType<T extends ZonasAggregateArgs> = {
    [P in keyof T & keyof AggregateZonas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZonas[P]> : Prisma.GetScalarType<T[P], AggregateZonas[P]>;
};
export type zonasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zonasWhereInput;
    orderBy?: Prisma.zonasOrderByWithAggregationInput | Prisma.zonasOrderByWithAggregationInput[];
    by: Prisma.ZonasScalarFieldEnum[] | Prisma.ZonasScalarFieldEnum;
    having?: Prisma.zonasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZonasCountAggregateInputType | true;
    _avg?: ZonasAvgAggregateInputType;
    _sum?: ZonasSumAggregateInputType;
    _min?: ZonasMinAggregateInputType;
    _max?: ZonasMaxAggregateInputType;
};
export type ZonasGroupByOutputType = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal;
    caudal_l_min: runtime.Decimal;
    _count: ZonasCountAggregateOutputType | null;
    _avg: ZonasAvgAggregateOutputType | null;
    _sum: ZonasSumAggregateOutputType | null;
    _min: ZonasMinAggregateOutputType | null;
    _max: ZonasMaxAggregateOutputType | null;
};
export type GetZonasGroupByPayload<T extends zonasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZonasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZonasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZonasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZonasGroupByOutputType[P]>;
}>>;
export type zonasWhereInput = {
    AND?: Prisma.zonasWhereInput | Prisma.zonasWhereInput[];
    OR?: Prisma.zonasWhereInput[];
    NOT?: Prisma.zonasWhereInput | Prisma.zonasWhereInput[];
    codigo_zona?: Prisma.StringFilter<"zonas"> | string;
    nombre?: Prisma.StringFilter<"zonas"> | string;
    id_cultivo?: Prisma.IntFilter<"zonas"> | number;
    superficie_m2?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.Estados_valvulaListRelationFilter;
    lecturas?: Prisma.LecturasListRelationFilter;
    umbrales_riego?: Prisma.Umbrales_riegoListRelationFilter;
    cultivos?: Prisma.XOR<Prisma.CultivosScalarRelationFilter, Prisma.cultivosWhereInput>;
};
export type zonasOrderByWithRelationInput = {
    codigo_zona?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
    estados_valvula?: Prisma.estados_valvulaOrderByRelationAggregateInput;
    lecturas?: Prisma.lecturasOrderByRelationAggregateInput;
    umbrales_riego?: Prisma.umbrales_riegoOrderByRelationAggregateInput;
    cultivos?: Prisma.cultivosOrderByWithRelationInput;
    _relevance?: Prisma.zonasOrderByRelevanceInput;
};
export type zonasWhereUniqueInput = Prisma.AtLeast<{
    codigo_zona?: string;
    AND?: Prisma.zonasWhereInput | Prisma.zonasWhereInput[];
    OR?: Prisma.zonasWhereInput[];
    NOT?: Prisma.zonasWhereInput | Prisma.zonasWhereInput[];
    nombre?: Prisma.StringFilter<"zonas"> | string;
    id_cultivo?: Prisma.IntFilter<"zonas"> | number;
    superficie_m2?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.Estados_valvulaListRelationFilter;
    lecturas?: Prisma.LecturasListRelationFilter;
    umbrales_riego?: Prisma.Umbrales_riegoListRelationFilter;
    cultivos?: Prisma.XOR<Prisma.CultivosScalarRelationFilter, Prisma.cultivosWhereInput>;
}, "codigo_zona">;
export type zonasOrderByWithAggregationInput = {
    codigo_zona?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
    _count?: Prisma.zonasCountOrderByAggregateInput;
    _avg?: Prisma.zonasAvgOrderByAggregateInput;
    _max?: Prisma.zonasMaxOrderByAggregateInput;
    _min?: Prisma.zonasMinOrderByAggregateInput;
    _sum?: Prisma.zonasSumOrderByAggregateInput;
};
export type zonasScalarWhereWithAggregatesInput = {
    AND?: Prisma.zonasScalarWhereWithAggregatesInput | Prisma.zonasScalarWhereWithAggregatesInput[];
    OR?: Prisma.zonasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.zonasScalarWhereWithAggregatesInput | Prisma.zonasScalarWhereWithAggregatesInput[];
    codigo_zona?: Prisma.StringWithAggregatesFilter<"zonas"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"zonas"> | string;
    id_cultivo?: Prisma.IntWithAggregatesFilter<"zonas"> | number;
    superficie_m2?: Prisma.DecimalWithAggregatesFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalWithAggregatesFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type zonasCreateInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutZonasInput;
    cultivos: Prisma.cultivosCreateNestedOneWithoutZonasInput;
};
export type zonasUncheckedCreateInput = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasUncheckedCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutZonasInput;
};
export type zonasUpdateInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutZonasNestedInput;
    cultivos?: Prisma.cultivosUpdateOneRequiredWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUncheckedUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutZonasNestedInput;
};
export type zonasCreateManyInput = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type zonasUpdateManyMutationInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type zonasUncheckedUpdateManyInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ZonasListRelationFilter = {
    every?: Prisma.zonasWhereInput;
    some?: Prisma.zonasWhereInput;
    none?: Prisma.zonasWhereInput;
};
export type zonasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ZonasScalarRelationFilter = {
    is?: Prisma.zonasWhereInput;
    isNot?: Prisma.zonasWhereInput;
};
export type zonasOrderByRelevanceInput = {
    fields: Prisma.zonasOrderByRelevanceFieldEnum | Prisma.zonasOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type zonasCountOrderByAggregateInput = {
    codigo_zona?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
};
export type zonasAvgOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
};
export type zonasMaxOrderByAggregateInput = {
    codigo_zona?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
};
export type zonasMinOrderByAggregateInput = {
    codigo_zona?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
};
export type zonasSumOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    superficie_m2?: Prisma.SortOrder;
    caudal_l_min?: Prisma.SortOrder;
};
export type zonasCreateNestedManyWithoutCultivosInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput> | Prisma.zonasCreateWithoutCultivosInput[] | Prisma.zonasUncheckedCreateWithoutCultivosInput[];
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutCultivosInput | Prisma.zonasCreateOrConnectWithoutCultivosInput[];
    createMany?: Prisma.zonasCreateManyCultivosInputEnvelope;
    connect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
};
export type zonasUncheckedCreateNestedManyWithoutCultivosInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput> | Prisma.zonasCreateWithoutCultivosInput[] | Prisma.zonasUncheckedCreateWithoutCultivosInput[];
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutCultivosInput | Prisma.zonasCreateOrConnectWithoutCultivosInput[];
    createMany?: Prisma.zonasCreateManyCultivosInputEnvelope;
    connect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
};
export type zonasUpdateManyWithoutCultivosNestedInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput> | Prisma.zonasCreateWithoutCultivosInput[] | Prisma.zonasUncheckedCreateWithoutCultivosInput[];
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutCultivosInput | Prisma.zonasCreateOrConnectWithoutCultivosInput[];
    upsert?: Prisma.zonasUpsertWithWhereUniqueWithoutCultivosInput | Prisma.zonasUpsertWithWhereUniqueWithoutCultivosInput[];
    createMany?: Prisma.zonasCreateManyCultivosInputEnvelope;
    set?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    disconnect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    delete?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    connect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    update?: Prisma.zonasUpdateWithWhereUniqueWithoutCultivosInput | Prisma.zonasUpdateWithWhereUniqueWithoutCultivosInput[];
    updateMany?: Prisma.zonasUpdateManyWithWhereWithoutCultivosInput | Prisma.zonasUpdateManyWithWhereWithoutCultivosInput[];
    deleteMany?: Prisma.zonasScalarWhereInput | Prisma.zonasScalarWhereInput[];
};
export type zonasUncheckedUpdateManyWithoutCultivosNestedInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput> | Prisma.zonasCreateWithoutCultivosInput[] | Prisma.zonasUncheckedCreateWithoutCultivosInput[];
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutCultivosInput | Prisma.zonasCreateOrConnectWithoutCultivosInput[];
    upsert?: Prisma.zonasUpsertWithWhereUniqueWithoutCultivosInput | Prisma.zonasUpsertWithWhereUniqueWithoutCultivosInput[];
    createMany?: Prisma.zonasCreateManyCultivosInputEnvelope;
    set?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    disconnect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    delete?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    connect?: Prisma.zonasWhereUniqueInput | Prisma.zonasWhereUniqueInput[];
    update?: Prisma.zonasUpdateWithWhereUniqueWithoutCultivosInput | Prisma.zonasUpdateWithWhereUniqueWithoutCultivosInput[];
    updateMany?: Prisma.zonasUpdateManyWithWhereWithoutCultivosInput | Prisma.zonasUpdateManyWithWhereWithoutCultivosInput[];
    deleteMany?: Prisma.zonasScalarWhereInput | Prisma.zonasScalarWhereInput[];
};
export type zonasCreateNestedOneWithoutEstados_valvulaInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutEstados_valvulaInput, Prisma.zonasUncheckedCreateWithoutEstados_valvulaInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutEstados_valvulaInput;
    connect?: Prisma.zonasWhereUniqueInput;
};
export type zonasUpdateOneRequiredWithoutEstados_valvulaNestedInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutEstados_valvulaInput, Prisma.zonasUncheckedCreateWithoutEstados_valvulaInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutEstados_valvulaInput;
    upsert?: Prisma.zonasUpsertWithoutEstados_valvulaInput;
    connect?: Prisma.zonasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zonasUpdateToOneWithWhereWithoutEstados_valvulaInput, Prisma.zonasUpdateWithoutEstados_valvulaInput>, Prisma.zonasUncheckedUpdateWithoutEstados_valvulaInput>;
};
export type zonasCreateNestedOneWithoutLecturasInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutLecturasInput, Prisma.zonasUncheckedCreateWithoutLecturasInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutLecturasInput;
    connect?: Prisma.zonasWhereUniqueInput;
};
export type zonasUpdateOneRequiredWithoutLecturasNestedInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutLecturasInput, Prisma.zonasUncheckedCreateWithoutLecturasInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutLecturasInput;
    upsert?: Prisma.zonasUpsertWithoutLecturasInput;
    connect?: Prisma.zonasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zonasUpdateToOneWithWhereWithoutLecturasInput, Prisma.zonasUpdateWithoutLecturasInput>, Prisma.zonasUncheckedUpdateWithoutLecturasInput>;
};
export type zonasCreateNestedOneWithoutUmbrales_riegoInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedCreateWithoutUmbrales_riegoInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutUmbrales_riegoInput;
    connect?: Prisma.zonasWhereUniqueInput;
};
export type zonasUpdateOneRequiredWithoutUmbrales_riegoNestedInput = {
    create?: Prisma.XOR<Prisma.zonasCreateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedCreateWithoutUmbrales_riegoInput>;
    connectOrCreate?: Prisma.zonasCreateOrConnectWithoutUmbrales_riegoInput;
    upsert?: Prisma.zonasUpsertWithoutUmbrales_riegoInput;
    connect?: Prisma.zonasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zonasUpdateToOneWithWhereWithoutUmbrales_riegoInput, Prisma.zonasUpdateWithoutUmbrales_riegoInput>, Prisma.zonasUncheckedUpdateWithoutUmbrales_riegoInput>;
};
export type zonasCreateWithoutCultivosInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutZonasInput;
};
export type zonasUncheckedCreateWithoutCultivosInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasUncheckedCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutZonasInput;
};
export type zonasCreateOrConnectWithoutCultivosInput = {
    where: Prisma.zonasWhereUniqueInput;
    create: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput>;
};
export type zonasCreateManyCultivosInputEnvelope = {
    data: Prisma.zonasCreateManyCultivosInput | Prisma.zonasCreateManyCultivosInput[];
    skipDuplicates?: boolean;
};
export type zonasUpsertWithWhereUniqueWithoutCultivosInput = {
    where: Prisma.zonasWhereUniqueInput;
    update: Prisma.XOR<Prisma.zonasUpdateWithoutCultivosInput, Prisma.zonasUncheckedUpdateWithoutCultivosInput>;
    create: Prisma.XOR<Prisma.zonasCreateWithoutCultivosInput, Prisma.zonasUncheckedCreateWithoutCultivosInput>;
};
export type zonasUpdateWithWhereUniqueWithoutCultivosInput = {
    where: Prisma.zonasWhereUniqueInput;
    data: Prisma.XOR<Prisma.zonasUpdateWithoutCultivosInput, Prisma.zonasUncheckedUpdateWithoutCultivosInput>;
};
export type zonasUpdateManyWithWhereWithoutCultivosInput = {
    where: Prisma.zonasScalarWhereInput;
    data: Prisma.XOR<Prisma.zonasUpdateManyMutationInput, Prisma.zonasUncheckedUpdateManyWithoutCultivosInput>;
};
export type zonasScalarWhereInput = {
    AND?: Prisma.zonasScalarWhereInput | Prisma.zonasScalarWhereInput[];
    OR?: Prisma.zonasScalarWhereInput[];
    NOT?: Prisma.zonasScalarWhereInput | Prisma.zonasScalarWhereInput[];
    codigo_zona?: Prisma.StringFilter<"zonas"> | string;
    nombre?: Prisma.StringFilter<"zonas"> | string;
    id_cultivo?: Prisma.IntFilter<"zonas"> | number;
    superficie_m2?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFilter<"zonas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type zonasCreateWithoutEstados_valvulaInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lecturas?: Prisma.lecturasCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutZonasInput;
    cultivos: Prisma.cultivosCreateNestedOneWithoutZonasInput;
};
export type zonasUncheckedCreateWithoutEstados_valvulaInput = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lecturas?: Prisma.lecturasUncheckedCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutZonasInput;
};
export type zonasCreateOrConnectWithoutEstados_valvulaInput = {
    where: Prisma.zonasWhereUniqueInput;
    create: Prisma.XOR<Prisma.zonasCreateWithoutEstados_valvulaInput, Prisma.zonasUncheckedCreateWithoutEstados_valvulaInput>;
};
export type zonasUpsertWithoutEstados_valvulaInput = {
    update: Prisma.XOR<Prisma.zonasUpdateWithoutEstados_valvulaInput, Prisma.zonasUncheckedUpdateWithoutEstados_valvulaInput>;
    create: Prisma.XOR<Prisma.zonasCreateWithoutEstados_valvulaInput, Prisma.zonasUncheckedCreateWithoutEstados_valvulaInput>;
    where?: Prisma.zonasWhereInput;
};
export type zonasUpdateToOneWithWhereWithoutEstados_valvulaInput = {
    where?: Prisma.zonasWhereInput;
    data: Prisma.XOR<Prisma.zonasUpdateWithoutEstados_valvulaInput, Prisma.zonasUncheckedUpdateWithoutEstados_valvulaInput>;
};
export type zonasUpdateWithoutEstados_valvulaInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lecturas?: Prisma.lecturasUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutZonasNestedInput;
    cultivos?: Prisma.cultivosUpdateOneRequiredWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateWithoutEstados_valvulaInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lecturas?: Prisma.lecturasUncheckedUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutZonasNestedInput;
};
export type zonasCreateWithoutLecturasInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutZonasInput;
    cultivos: Prisma.cultivosCreateNestedOneWithoutZonasInput;
};
export type zonasUncheckedCreateWithoutLecturasInput = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutZonasInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutZonasInput;
};
export type zonasCreateOrConnectWithoutLecturasInput = {
    where: Prisma.zonasWhereUniqueInput;
    create: Prisma.XOR<Prisma.zonasCreateWithoutLecturasInput, Prisma.zonasUncheckedCreateWithoutLecturasInput>;
};
export type zonasUpsertWithoutLecturasInput = {
    update: Prisma.XOR<Prisma.zonasUpdateWithoutLecturasInput, Prisma.zonasUncheckedUpdateWithoutLecturasInput>;
    create: Prisma.XOR<Prisma.zonasCreateWithoutLecturasInput, Prisma.zonasUncheckedCreateWithoutLecturasInput>;
    where?: Prisma.zonasWhereInput;
};
export type zonasUpdateToOneWithWhereWithoutLecturasInput = {
    where?: Prisma.zonasWhereInput;
    data: Prisma.XOR<Prisma.zonasUpdateWithoutLecturasInput, Prisma.zonasUncheckedUpdateWithoutLecturasInput>;
};
export type zonasUpdateWithoutLecturasInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutZonasNestedInput;
    cultivos?: Prisma.cultivosUpdateOneRequiredWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateWithoutLecturasInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutZonasNestedInput;
};
export type zonasCreateWithoutUmbrales_riegoInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasCreateNestedManyWithoutZonasInput;
    cultivos: Prisma.cultivosCreateNestedOneWithoutZonasInput;
};
export type zonasUncheckedCreateWithoutUmbrales_riegoInput = {
    codigo_zona: string;
    nombre: string;
    id_cultivo: number;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutZonasInput;
    lecturas?: Prisma.lecturasUncheckedCreateNestedManyWithoutZonasInput;
};
export type zonasCreateOrConnectWithoutUmbrales_riegoInput = {
    where: Prisma.zonasWhereUniqueInput;
    create: Prisma.XOR<Prisma.zonasCreateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedCreateWithoutUmbrales_riegoInput>;
};
export type zonasUpsertWithoutUmbrales_riegoInput = {
    update: Prisma.XOR<Prisma.zonasUpdateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedUpdateWithoutUmbrales_riegoInput>;
    create: Prisma.XOR<Prisma.zonasCreateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedCreateWithoutUmbrales_riegoInput>;
    where?: Prisma.zonasWhereInput;
};
export type zonasUpdateToOneWithWhereWithoutUmbrales_riegoInput = {
    where?: Prisma.zonasWhereInput;
    data: Prisma.XOR<Prisma.zonasUpdateWithoutUmbrales_riegoInput, Prisma.zonasUncheckedUpdateWithoutUmbrales_riegoInput>;
};
export type zonasUpdateWithoutUmbrales_riegoInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUpdateManyWithoutZonasNestedInput;
    cultivos?: Prisma.cultivosUpdateOneRequiredWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateWithoutUmbrales_riegoInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUncheckedUpdateManyWithoutZonasNestedInput;
};
export type zonasCreateManyCultivosInput = {
    codigo_zona: string;
    nombre: string;
    superficie_m2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type zonasUpdateWithoutCultivosInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateWithoutCultivosInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutZonasNestedInput;
    lecturas?: Prisma.lecturasUncheckedUpdateManyWithoutZonasNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutZonasNestedInput;
};
export type zonasUncheckedUpdateManyWithoutCultivosInput = {
    codigo_zona?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    superficie_m2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    caudal_l_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ZonasCountOutputType = {
    estados_valvula: number;
    lecturas: number;
    umbrales_riego: number;
};
export type ZonasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estados_valvula?: boolean | ZonasCountOutputTypeCountEstados_valvulaArgs;
    lecturas?: boolean | ZonasCountOutputTypeCountLecturasArgs;
    umbrales_riego?: boolean | ZonasCountOutputTypeCountUmbrales_riegoArgs;
};
export type ZonasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZonasCountOutputTypeSelect<ExtArgs> | null;
};
export type ZonasCountOutputTypeCountEstados_valvulaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_valvulaWhereInput;
};
export type ZonasCountOutputTypeCountLecturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturasWhereInput;
};
export type ZonasCountOutputTypeCountUmbrales_riegoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.umbrales_riegoWhereInput;
};
export type zonasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    codigo_zona?: boolean;
    nombre?: boolean;
    id_cultivo?: boolean;
    superficie_m2?: boolean;
    caudal_l_min?: boolean;
    estados_valvula?: boolean | Prisma.zonas$estados_valvulaArgs<ExtArgs>;
    lecturas?: boolean | Prisma.zonas$lecturasArgs<ExtArgs>;
    umbrales_riego?: boolean | Prisma.zonas$umbrales_riegoArgs<ExtArgs>;
    cultivos?: boolean | Prisma.cultivosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ZonasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zonas"]>;
export type zonasSelectScalar = {
    codigo_zona?: boolean;
    nombre?: boolean;
    id_cultivo?: boolean;
    superficie_m2?: boolean;
    caudal_l_min?: boolean;
};
export type zonasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"codigo_zona" | "nombre" | "id_cultivo" | "superficie_m2" | "caudal_l_min", ExtArgs["result"]["zonas"]>;
export type zonasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estados_valvula?: boolean | Prisma.zonas$estados_valvulaArgs<ExtArgs>;
    lecturas?: boolean | Prisma.zonas$lecturasArgs<ExtArgs>;
    umbrales_riego?: boolean | Prisma.zonas$umbrales_riegoArgs<ExtArgs>;
    cultivos?: boolean | Prisma.cultivosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ZonasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $zonasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "zonas";
    objects: {
        estados_valvula: Prisma.$estados_valvulaPayload<ExtArgs>[];
        lecturas: Prisma.$lecturasPayload<ExtArgs>[];
        umbrales_riego: Prisma.$umbrales_riegoPayload<ExtArgs>[];
        cultivos: Prisma.$cultivosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        codigo_zona: string;
        nombre: string;
        id_cultivo: number;
        superficie_m2: runtime.Decimal;
        caudal_l_min: runtime.Decimal;
    }, ExtArgs["result"]["zonas"]>;
    composites: {};
};
export type zonasGetPayload<S extends boolean | null | undefined | zonasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$zonasPayload, S>;
export type zonasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<zonasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZonasCountAggregateInputType | true;
};
export interface zonasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['zonas'];
        meta: {
            name: 'zonas';
        };
    };
    findUnique<T extends zonasFindUniqueArgs>(args: Prisma.SelectSubset<T, zonasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends zonasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, zonasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends zonasFindFirstArgs>(args?: Prisma.SelectSubset<T, zonasFindFirstArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends zonasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, zonasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends zonasFindManyArgs>(args?: Prisma.SelectSubset<T, zonasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends zonasCreateArgs>(args: Prisma.SelectSubset<T, zonasCreateArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends zonasCreateManyArgs>(args?: Prisma.SelectSubset<T, zonasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends zonasDeleteArgs>(args: Prisma.SelectSubset<T, zonasDeleteArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends zonasUpdateArgs>(args: Prisma.SelectSubset<T, zonasUpdateArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends zonasDeleteManyArgs>(args?: Prisma.SelectSubset<T, zonasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends zonasUpdateManyArgs>(args: Prisma.SelectSubset<T, zonasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends zonasUpsertArgs>(args: Prisma.SelectSubset<T, zonasUpsertArgs<ExtArgs>>): Prisma.Prisma__zonasClient<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends zonasCountArgs>(args?: Prisma.Subset<T, zonasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZonasCountAggregateOutputType> : number>;
    aggregate<T extends ZonasAggregateArgs>(args: Prisma.Subset<T, ZonasAggregateArgs>): Prisma.PrismaPromise<GetZonasAggregateType<T>>;
    groupBy<T extends zonasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: zonasGroupByArgs['orderBy'];
    } : {
        orderBy?: zonasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, zonasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZonasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: zonasFieldRefs;
}
export interface Prisma__zonasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estados_valvula<T extends Prisma.zonas$estados_valvulaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonas$estados_valvulaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lecturas<T extends Prisma.zonas$lecturasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonas$lecturasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lecturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    umbrales_riego<T extends Prisma.zonas$umbrales_riegoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zonas$umbrales_riegoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cultivos<T extends Prisma.cultivosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cultivosDefaultArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface zonasFieldRefs {
    readonly codigo_zona: Prisma.FieldRef<"zonas", 'String'>;
    readonly nombre: Prisma.FieldRef<"zonas", 'String'>;
    readonly id_cultivo: Prisma.FieldRef<"zonas", 'Int'>;
    readonly superficie_m2: Prisma.FieldRef<"zonas", 'Decimal'>;
    readonly caudal_l_min: Prisma.FieldRef<"zonas", 'Decimal'>;
}
export type zonasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where: Prisma.zonasWhereUniqueInput;
};
export type zonasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where: Prisma.zonasWhereUniqueInput;
};
export type zonasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where?: Prisma.zonasWhereInput;
    orderBy?: Prisma.zonasOrderByWithRelationInput | Prisma.zonasOrderByWithRelationInput[];
    cursor?: Prisma.zonasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZonasScalarFieldEnum | Prisma.ZonasScalarFieldEnum[];
};
export type zonasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where?: Prisma.zonasWhereInput;
    orderBy?: Prisma.zonasOrderByWithRelationInput | Prisma.zonasOrderByWithRelationInput[];
    cursor?: Prisma.zonasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZonasScalarFieldEnum | Prisma.ZonasScalarFieldEnum[];
};
export type zonasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where?: Prisma.zonasWhereInput;
    orderBy?: Prisma.zonasOrderByWithRelationInput | Prisma.zonasOrderByWithRelationInput[];
    cursor?: Prisma.zonasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZonasScalarFieldEnum | Prisma.ZonasScalarFieldEnum[];
};
export type zonasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.zonasCreateInput, Prisma.zonasUncheckedCreateInput>;
};
export type zonasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.zonasCreateManyInput | Prisma.zonasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type zonasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.zonasUpdateInput, Prisma.zonasUncheckedUpdateInput>;
    where: Prisma.zonasWhereUniqueInput;
};
export type zonasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.zonasUpdateManyMutationInput, Prisma.zonasUncheckedUpdateManyInput>;
    where?: Prisma.zonasWhereInput;
    limit?: number;
};
export type zonasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where: Prisma.zonasWhereUniqueInput;
    create: Prisma.XOR<Prisma.zonasCreateInput, Prisma.zonasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.zonasUpdateInput, Prisma.zonasUncheckedUpdateInput>;
};
export type zonasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
    where: Prisma.zonasWhereUniqueInput;
};
export type zonasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zonasWhereInput;
    limit?: number;
};
export type zonas$estados_valvulaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type zonas$lecturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type zonas$umbrales_riegoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type zonasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.zonasSelect<ExtArgs> | null;
    omit?: Prisma.zonasOmit<ExtArgs> | null;
    include?: Prisma.zonasInclude<ExtArgs> | null;
};
