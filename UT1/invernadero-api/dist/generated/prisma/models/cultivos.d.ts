import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type cultivosModel = runtime.Types.Result.DefaultSelection<Prisma.$cultivosPayload>;
export type AggregateCultivos = {
    _count: CultivosCountAggregateOutputType | null;
    _avg: CultivosAvgAggregateOutputType | null;
    _sum: CultivosSumAggregateOutputType | null;
    _min: CultivosMinAggregateOutputType | null;
    _max: CultivosMaxAggregateOutputType | null;
};
export type CultivosAvgAggregateOutputType = {
    id_cultivo: number | null;
    temperatura_min: runtime.Decimal | null;
    temperatura_max: runtime.Decimal | null;
    humedad_suelo_min: runtime.Decimal | null;
    humedad_suelo_max: runtime.Decimal | null;
};
export type CultivosSumAggregateOutputType = {
    id_cultivo: number | null;
    temperatura_min: runtime.Decimal | null;
    temperatura_max: runtime.Decimal | null;
    humedad_suelo_min: runtime.Decimal | null;
    humedad_suelo_max: runtime.Decimal | null;
};
export type CultivosMinAggregateOutputType = {
    id_cultivo: number | null;
    nombre: string | null;
    temperatura_min: runtime.Decimal | null;
    temperatura_max: runtime.Decimal | null;
    humedad_suelo_min: runtime.Decimal | null;
    humedad_suelo_max: runtime.Decimal | null;
};
export type CultivosMaxAggregateOutputType = {
    id_cultivo: number | null;
    nombre: string | null;
    temperatura_min: runtime.Decimal | null;
    temperatura_max: runtime.Decimal | null;
    humedad_suelo_min: runtime.Decimal | null;
    humedad_suelo_max: runtime.Decimal | null;
};
export type CultivosCountAggregateOutputType = {
    id_cultivo: number;
    nombre: number;
    temperatura_min: number;
    temperatura_max: number;
    humedad_suelo_min: number;
    humedad_suelo_max: number;
    _all: number;
};
export type CultivosAvgAggregateInputType = {
    id_cultivo?: true;
    temperatura_min?: true;
    temperatura_max?: true;
    humedad_suelo_min?: true;
    humedad_suelo_max?: true;
};
export type CultivosSumAggregateInputType = {
    id_cultivo?: true;
    temperatura_min?: true;
    temperatura_max?: true;
    humedad_suelo_min?: true;
    humedad_suelo_max?: true;
};
export type CultivosMinAggregateInputType = {
    id_cultivo?: true;
    nombre?: true;
    temperatura_min?: true;
    temperatura_max?: true;
    humedad_suelo_min?: true;
    humedad_suelo_max?: true;
};
export type CultivosMaxAggregateInputType = {
    id_cultivo?: true;
    nombre?: true;
    temperatura_min?: true;
    temperatura_max?: true;
    humedad_suelo_min?: true;
    humedad_suelo_max?: true;
};
export type CultivosCountAggregateInputType = {
    id_cultivo?: true;
    nombre?: true;
    temperatura_min?: true;
    temperatura_max?: true;
    humedad_suelo_min?: true;
    humedad_suelo_max?: true;
    _all?: true;
};
export type CultivosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cultivosWhereInput;
    orderBy?: Prisma.cultivosOrderByWithRelationInput | Prisma.cultivosOrderByWithRelationInput[];
    cursor?: Prisma.cultivosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CultivosCountAggregateInputType;
    _avg?: CultivosAvgAggregateInputType;
    _sum?: CultivosSumAggregateInputType;
    _min?: CultivosMinAggregateInputType;
    _max?: CultivosMaxAggregateInputType;
};
export type GetCultivosAggregateType<T extends CultivosAggregateArgs> = {
    [P in keyof T & keyof AggregateCultivos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCultivos[P]> : Prisma.GetScalarType<T[P], AggregateCultivos[P]>;
};
export type cultivosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cultivosWhereInput;
    orderBy?: Prisma.cultivosOrderByWithAggregationInput | Prisma.cultivosOrderByWithAggregationInput[];
    by: Prisma.CultivosScalarFieldEnum[] | Prisma.CultivosScalarFieldEnum;
    having?: Prisma.cultivosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CultivosCountAggregateInputType | true;
    _avg?: CultivosAvgAggregateInputType;
    _sum?: CultivosSumAggregateInputType;
    _min?: CultivosMinAggregateInputType;
    _max?: CultivosMaxAggregateInputType;
};
export type CultivosGroupByOutputType = {
    id_cultivo: number;
    nombre: string;
    temperatura_min: runtime.Decimal;
    temperatura_max: runtime.Decimal;
    humedad_suelo_min: runtime.Decimal;
    humedad_suelo_max: runtime.Decimal;
    _count: CultivosCountAggregateOutputType | null;
    _avg: CultivosAvgAggregateOutputType | null;
    _sum: CultivosSumAggregateOutputType | null;
    _min: CultivosMinAggregateOutputType | null;
    _max: CultivosMaxAggregateOutputType | null;
};
export type GetCultivosGroupByPayload<T extends cultivosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CultivosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CultivosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CultivosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CultivosGroupByOutputType[P]>;
}>>;
export type cultivosWhereInput = {
    AND?: Prisma.cultivosWhereInput | Prisma.cultivosWhereInput[];
    OR?: Prisma.cultivosWhereInput[];
    NOT?: Prisma.cultivosWhereInput | Prisma.cultivosWhereInput[];
    id_cultivo?: Prisma.IntFilter<"cultivos"> | number;
    nombre?: Prisma.StringFilter<"cultivos"> | string;
    temperatura_min?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.ZonasListRelationFilter;
};
export type cultivosOrderByWithRelationInput = {
    id_cultivo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
    zonas?: Prisma.zonasOrderByRelationAggregateInput;
    _relevance?: Prisma.cultivosOrderByRelevanceInput;
};
export type cultivosWhereUniqueInput = Prisma.AtLeast<{
    id_cultivo?: number;
    nombre?: string;
    AND?: Prisma.cultivosWhereInput | Prisma.cultivosWhereInput[];
    OR?: Prisma.cultivosWhereInput[];
    NOT?: Prisma.cultivosWhereInput | Prisma.cultivosWhereInput[];
    temperatura_min?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.ZonasListRelationFilter;
}, "id_cultivo" | "nombre">;
export type cultivosOrderByWithAggregationInput = {
    id_cultivo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
    _count?: Prisma.cultivosCountOrderByAggregateInput;
    _avg?: Prisma.cultivosAvgOrderByAggregateInput;
    _max?: Prisma.cultivosMaxOrderByAggregateInput;
    _min?: Prisma.cultivosMinOrderByAggregateInput;
    _sum?: Prisma.cultivosSumOrderByAggregateInput;
};
export type cultivosScalarWhereWithAggregatesInput = {
    AND?: Prisma.cultivosScalarWhereWithAggregatesInput | Prisma.cultivosScalarWhereWithAggregatesInput[];
    OR?: Prisma.cultivosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cultivosScalarWhereWithAggregatesInput | Prisma.cultivosScalarWhereWithAggregatesInput[];
    id_cultivo?: Prisma.IntWithAggregatesFilter<"cultivos"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"cultivos"> | string;
    temperatura_min?: Prisma.DecimalWithAggregatesFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalWithAggregatesFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalWithAggregatesFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalWithAggregatesFilter<"cultivos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosCreateInput = {
    nombre: string;
    temperatura_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.zonasCreateNestedManyWithoutCultivosInput;
};
export type cultivosUncheckedCreateInput = {
    id_cultivo?: number;
    nombre: string;
    temperatura_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.zonasUncheckedCreateNestedManyWithoutCultivosInput;
};
export type cultivosUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.zonasUpdateManyWithoutCultivosNestedInput;
};
export type cultivosUncheckedUpdateInput = {
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    zonas?: Prisma.zonasUncheckedUpdateManyWithoutCultivosNestedInput;
};
export type cultivosCreateManyInput = {
    id_cultivo?: number;
    nombre: string;
    temperatura_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosUncheckedUpdateManyInput = {
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosOrderByRelevanceInput = {
    fields: Prisma.cultivosOrderByRelevanceFieldEnum | Prisma.cultivosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cultivosCountOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
};
export type cultivosAvgOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
};
export type cultivosMaxOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
};
export type cultivosMinOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
};
export type cultivosSumOrderByAggregateInput = {
    id_cultivo?: Prisma.SortOrder;
    temperatura_min?: Prisma.SortOrder;
    temperatura_max?: Prisma.SortOrder;
    humedad_suelo_min?: Prisma.SortOrder;
    humedad_suelo_max?: Prisma.SortOrder;
};
export type CultivosScalarRelationFilter = {
    is?: Prisma.cultivosWhereInput;
    isNot?: Prisma.cultivosWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type cultivosCreateNestedOneWithoutZonasInput = {
    create?: Prisma.XOR<Prisma.cultivosCreateWithoutZonasInput, Prisma.cultivosUncheckedCreateWithoutZonasInput>;
    connectOrCreate?: Prisma.cultivosCreateOrConnectWithoutZonasInput;
    connect?: Prisma.cultivosWhereUniqueInput;
};
export type cultivosUpdateOneRequiredWithoutZonasNestedInput = {
    create?: Prisma.XOR<Prisma.cultivosCreateWithoutZonasInput, Prisma.cultivosUncheckedCreateWithoutZonasInput>;
    connectOrCreate?: Prisma.cultivosCreateOrConnectWithoutZonasInput;
    upsert?: Prisma.cultivosUpsertWithoutZonasInput;
    connect?: Prisma.cultivosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cultivosUpdateToOneWithWhereWithoutZonasInput, Prisma.cultivosUpdateWithoutZonasInput>, Prisma.cultivosUncheckedUpdateWithoutZonasInput>;
};
export type cultivosCreateWithoutZonasInput = {
    nombre: string;
    temperatura_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosUncheckedCreateWithoutZonasInput = {
    id_cultivo?: number;
    nombre: string;
    temperatura_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min: runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosCreateOrConnectWithoutZonasInput = {
    where: Prisma.cultivosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cultivosCreateWithoutZonasInput, Prisma.cultivosUncheckedCreateWithoutZonasInput>;
};
export type cultivosUpsertWithoutZonasInput = {
    update: Prisma.XOR<Prisma.cultivosUpdateWithoutZonasInput, Prisma.cultivosUncheckedUpdateWithoutZonasInput>;
    create: Prisma.XOR<Prisma.cultivosCreateWithoutZonasInput, Prisma.cultivosUncheckedCreateWithoutZonasInput>;
    where?: Prisma.cultivosWhereInput;
};
export type cultivosUpdateToOneWithWhereWithoutZonasInput = {
    where?: Prisma.cultivosWhereInput;
    data: Prisma.XOR<Prisma.cultivosUpdateWithoutZonasInput, Prisma.cultivosUncheckedUpdateWithoutZonasInput>;
};
export type cultivosUpdateWithoutZonasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cultivosUncheckedUpdateWithoutZonasInput = {
    id_cultivo?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    temperatura_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    temperatura_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_min?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    humedad_suelo_max?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CultivosCountOutputType = {
    zonas: number;
};
export type CultivosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zonas?: boolean | CultivosCountOutputTypeCountZonasArgs;
};
export type CultivosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CultivosCountOutputTypeSelect<ExtArgs> | null;
};
export type CultivosCountOutputTypeCountZonasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zonasWhereInput;
};
export type cultivosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cultivo?: boolean;
    nombre?: boolean;
    temperatura_min?: boolean;
    temperatura_max?: boolean;
    humedad_suelo_min?: boolean;
    humedad_suelo_max?: boolean;
    zonas?: boolean | Prisma.cultivos$zonasArgs<ExtArgs>;
    _count?: boolean | Prisma.CultivosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cultivos"]>;
export type cultivosSelectScalar = {
    id_cultivo?: boolean;
    nombre?: boolean;
    temperatura_min?: boolean;
    temperatura_max?: boolean;
    humedad_suelo_min?: boolean;
    humedad_suelo_max?: boolean;
};
export type cultivosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_cultivo" | "nombre" | "temperatura_min" | "temperatura_max" | "humedad_suelo_min" | "humedad_suelo_max", ExtArgs["result"]["cultivos"]>;
export type cultivosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zonas?: boolean | Prisma.cultivos$zonasArgs<ExtArgs>;
    _count?: boolean | Prisma.CultivosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cultivosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cultivos";
    objects: {
        zonas: Prisma.$zonasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_cultivo: number;
        nombre: string;
        temperatura_min: runtime.Decimal;
        temperatura_max: runtime.Decimal;
        humedad_suelo_min: runtime.Decimal;
        humedad_suelo_max: runtime.Decimal;
    }, ExtArgs["result"]["cultivos"]>;
    composites: {};
};
export type cultivosGetPayload<S extends boolean | null | undefined | cultivosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cultivosPayload, S>;
export type cultivosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cultivosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CultivosCountAggregateInputType | true;
};
export interface cultivosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cultivos'];
        meta: {
            name: 'cultivos';
        };
    };
    findUnique<T extends cultivosFindUniqueArgs>(args: Prisma.SelectSubset<T, cultivosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cultivosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cultivosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cultivosFindFirstArgs>(args?: Prisma.SelectSubset<T, cultivosFindFirstArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cultivosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cultivosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cultivosFindManyArgs>(args?: Prisma.SelectSubset<T, cultivosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cultivosCreateArgs>(args: Prisma.SelectSubset<T, cultivosCreateArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cultivosCreateManyArgs>(args?: Prisma.SelectSubset<T, cultivosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends cultivosDeleteArgs>(args: Prisma.SelectSubset<T, cultivosDeleteArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cultivosUpdateArgs>(args: Prisma.SelectSubset<T, cultivosUpdateArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cultivosDeleteManyArgs>(args?: Prisma.SelectSubset<T, cultivosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cultivosUpdateManyArgs>(args: Prisma.SelectSubset<T, cultivosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends cultivosUpsertArgs>(args: Prisma.SelectSubset<T, cultivosUpsertArgs<ExtArgs>>): Prisma.Prisma__cultivosClient<runtime.Types.Result.GetResult<Prisma.$cultivosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cultivosCountArgs>(args?: Prisma.Subset<T, cultivosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CultivosCountAggregateOutputType> : number>;
    aggregate<T extends CultivosAggregateArgs>(args: Prisma.Subset<T, CultivosAggregateArgs>): Prisma.PrismaPromise<GetCultivosAggregateType<T>>;
    groupBy<T extends cultivosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cultivosGroupByArgs['orderBy'];
    } : {
        orderBy?: cultivosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cultivosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultivosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cultivosFieldRefs;
}
export interface Prisma__cultivosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zonas<T extends Prisma.cultivos$zonasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cultivos$zonasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zonasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cultivosFieldRefs {
    readonly id_cultivo: Prisma.FieldRef<"cultivos", 'Int'>;
    readonly nombre: Prisma.FieldRef<"cultivos", 'String'>;
    readonly temperatura_min: Prisma.FieldRef<"cultivos", 'Decimal'>;
    readonly temperatura_max: Prisma.FieldRef<"cultivos", 'Decimal'>;
    readonly humedad_suelo_min: Prisma.FieldRef<"cultivos", 'Decimal'>;
    readonly humedad_suelo_max: Prisma.FieldRef<"cultivos", 'Decimal'>;
}
export type cultivosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where: Prisma.cultivosWhereUniqueInput;
};
export type cultivosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where: Prisma.cultivosWhereUniqueInput;
};
export type cultivosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where?: Prisma.cultivosWhereInput;
    orderBy?: Prisma.cultivosOrderByWithRelationInput | Prisma.cultivosOrderByWithRelationInput[];
    cursor?: Prisma.cultivosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CultivosScalarFieldEnum | Prisma.CultivosScalarFieldEnum[];
};
export type cultivosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where?: Prisma.cultivosWhereInput;
    orderBy?: Prisma.cultivosOrderByWithRelationInput | Prisma.cultivosOrderByWithRelationInput[];
    cursor?: Prisma.cultivosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CultivosScalarFieldEnum | Prisma.CultivosScalarFieldEnum[];
};
export type cultivosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where?: Prisma.cultivosWhereInput;
    orderBy?: Prisma.cultivosOrderByWithRelationInput | Prisma.cultivosOrderByWithRelationInput[];
    cursor?: Prisma.cultivosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CultivosScalarFieldEnum | Prisma.CultivosScalarFieldEnum[];
};
export type cultivosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cultivosCreateInput, Prisma.cultivosUncheckedCreateInput>;
};
export type cultivosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cultivosCreateManyInput | Prisma.cultivosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cultivosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cultivosUpdateInput, Prisma.cultivosUncheckedUpdateInput>;
    where: Prisma.cultivosWhereUniqueInput;
};
export type cultivosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cultivosUpdateManyMutationInput, Prisma.cultivosUncheckedUpdateManyInput>;
    where?: Prisma.cultivosWhereInput;
    limit?: number;
};
export type cultivosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where: Prisma.cultivosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cultivosCreateInput, Prisma.cultivosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cultivosUpdateInput, Prisma.cultivosUncheckedUpdateInput>;
};
export type cultivosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
    where: Prisma.cultivosWhereUniqueInput;
};
export type cultivosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cultivosWhereInput;
    limit?: number;
};
export type cultivos$zonasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cultivosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cultivosSelect<ExtArgs> | null;
    omit?: Prisma.cultivosOmit<ExtArgs> | null;
    include?: Prisma.cultivosInclude<ExtArgs> | null;
};
