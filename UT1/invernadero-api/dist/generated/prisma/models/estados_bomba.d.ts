import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type estados_bombaModel = runtime.Types.Result.DefaultSelection<Prisma.$estados_bombaPayload>;
export type AggregateEstados_bomba = {
    _count: Estados_bombaCountAggregateOutputType | null;
    _avg: Estados_bombaAvgAggregateOutputType | null;
    _sum: Estados_bombaSumAggregateOutputType | null;
    _min: Estados_bombaMinAggregateOutputType | null;
    _max: Estados_bombaMaxAggregateOutputType | null;
};
export type Estados_bombaAvgAggregateOutputType = {
    id: number | null;
};
export type Estados_bombaSumAggregateOutputType = {
    id: number | null;
};
export type Estados_bombaMinAggregateOutputType = {
    id: number | null;
    estado: $Enums.estados_bomba_estado | null;
    fecha: Date | null;
    hora: Date | null;
};
export type Estados_bombaMaxAggregateOutputType = {
    id: number | null;
    estado: $Enums.estados_bomba_estado | null;
    fecha: Date | null;
    hora: Date | null;
};
export type Estados_bombaCountAggregateOutputType = {
    id: number;
    estado: number;
    fecha: number;
    hora: number;
    _all: number;
};
export type Estados_bombaAvgAggregateInputType = {
    id?: true;
};
export type Estados_bombaSumAggregateInputType = {
    id?: true;
};
export type Estados_bombaMinAggregateInputType = {
    id?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
};
export type Estados_bombaMaxAggregateInputType = {
    id?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
};
export type Estados_bombaCountAggregateInputType = {
    id?: true;
    estado?: true;
    fecha?: true;
    hora?: true;
    _all?: true;
};
export type Estados_bombaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_bombaWhereInput;
    orderBy?: Prisma.estados_bombaOrderByWithRelationInput | Prisma.estados_bombaOrderByWithRelationInput[];
    cursor?: Prisma.estados_bombaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Estados_bombaCountAggregateInputType;
    _avg?: Estados_bombaAvgAggregateInputType;
    _sum?: Estados_bombaSumAggregateInputType;
    _min?: Estados_bombaMinAggregateInputType;
    _max?: Estados_bombaMaxAggregateInputType;
};
export type GetEstados_bombaAggregateType<T extends Estados_bombaAggregateArgs> = {
    [P in keyof T & keyof AggregateEstados_bomba]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstados_bomba[P]> : Prisma.GetScalarType<T[P], AggregateEstados_bomba[P]>;
};
export type estados_bombaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_bombaWhereInput;
    orderBy?: Prisma.estados_bombaOrderByWithAggregationInput | Prisma.estados_bombaOrderByWithAggregationInput[];
    by: Prisma.Estados_bombaScalarFieldEnum[] | Prisma.Estados_bombaScalarFieldEnum;
    having?: Prisma.estados_bombaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Estados_bombaCountAggregateInputType | true;
    _avg?: Estados_bombaAvgAggregateInputType;
    _sum?: Estados_bombaSumAggregateInputType;
    _min?: Estados_bombaMinAggregateInputType;
    _max?: Estados_bombaMaxAggregateInputType;
};
export type Estados_bombaGroupByOutputType = {
    id: number;
    estado: $Enums.estados_bomba_estado;
    fecha: Date;
    hora: Date;
    _count: Estados_bombaCountAggregateOutputType | null;
    _avg: Estados_bombaAvgAggregateOutputType | null;
    _sum: Estados_bombaSumAggregateOutputType | null;
    _min: Estados_bombaMinAggregateOutputType | null;
    _max: Estados_bombaMaxAggregateOutputType | null;
};
export type GetEstados_bombaGroupByPayload<T extends estados_bombaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Estados_bombaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Estados_bombaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Estados_bombaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Estados_bombaGroupByOutputType[P]>;
}>>;
export type estados_bombaWhereInput = {
    AND?: Prisma.estados_bombaWhereInput | Prisma.estados_bombaWhereInput[];
    OR?: Prisma.estados_bombaWhereInput[];
    NOT?: Prisma.estados_bombaWhereInput | Prisma.estados_bombaWhereInput[];
    id?: Prisma.IntFilter<"estados_bomba"> | number;
    estado?: Prisma.Enumestados_bomba_estadoFilter<"estados_bomba"> | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFilter<"estados_bomba"> | Date | string;
    hora?: Prisma.DateTimeFilter<"estados_bomba"> | Date | string;
};
export type estados_bombaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
};
export type estados_bombaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.estados_bombaWhereInput | Prisma.estados_bombaWhereInput[];
    OR?: Prisma.estados_bombaWhereInput[];
    NOT?: Prisma.estados_bombaWhereInput | Prisma.estados_bombaWhereInput[];
    estado?: Prisma.Enumestados_bomba_estadoFilter<"estados_bomba"> | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFilter<"estados_bomba"> | Date | string;
    hora?: Prisma.DateTimeFilter<"estados_bomba"> | Date | string;
}, "id">;
export type estados_bombaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    _count?: Prisma.estados_bombaCountOrderByAggregateInput;
    _avg?: Prisma.estados_bombaAvgOrderByAggregateInput;
    _max?: Prisma.estados_bombaMaxOrderByAggregateInput;
    _min?: Prisma.estados_bombaMinOrderByAggregateInput;
    _sum?: Prisma.estados_bombaSumOrderByAggregateInput;
};
export type estados_bombaScalarWhereWithAggregatesInput = {
    AND?: Prisma.estados_bombaScalarWhereWithAggregatesInput | Prisma.estados_bombaScalarWhereWithAggregatesInput[];
    OR?: Prisma.estados_bombaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.estados_bombaScalarWhereWithAggregatesInput | Prisma.estados_bombaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"estados_bomba"> | number;
    estado?: Prisma.Enumestados_bomba_estadoWithAggregatesFilter<"estados_bomba"> | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"estados_bomba"> | Date | string;
    hora?: Prisma.DateTimeWithAggregatesFilter<"estados_bomba"> | Date | string;
};
export type estados_bombaCreateInput = {
    estado: $Enums.estados_bomba_estado;
    fecha: Date | string;
    hora: Date | string;
};
export type estados_bombaUncheckedCreateInput = {
    id?: number;
    estado: $Enums.estados_bomba_estado;
    fecha: Date | string;
    hora: Date | string;
};
export type estados_bombaUpdateInput = {
    estado?: Prisma.Enumestados_bomba_estadoFieldUpdateOperationsInput | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type estados_bombaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.Enumestados_bomba_estadoFieldUpdateOperationsInput | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type estados_bombaCreateManyInput = {
    id?: number;
    estado: $Enums.estados_bomba_estado;
    fecha: Date | string;
    hora: Date | string;
};
export type estados_bombaUpdateManyMutationInput = {
    estado?: Prisma.Enumestados_bomba_estadoFieldUpdateOperationsInput | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type estados_bombaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.Enumestados_bomba_estadoFieldUpdateOperationsInput | $Enums.estados_bomba_estado;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type estados_bombaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
};
export type estados_bombaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type estados_bombaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
};
export type estados_bombaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
};
export type estados_bombaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Enumestados_bomba_estadoFieldUpdateOperationsInput = {
    set?: $Enums.estados_bomba_estado;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type estados_bombaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estado?: boolean;
    fecha?: boolean;
    hora?: boolean;
}, ExtArgs["result"]["estados_bomba"]>;
export type estados_bombaSelectScalar = {
    id?: boolean;
    estado?: boolean;
    fecha?: boolean;
    hora?: boolean;
};
export type estados_bombaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "estado" | "fecha" | "hora", ExtArgs["result"]["estados_bomba"]>;
export type $estados_bombaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "estados_bomba";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        estado: $Enums.estados_bomba_estado;
        fecha: Date;
        hora: Date;
    }, ExtArgs["result"]["estados_bomba"]>;
    composites: {};
};
export type estados_bombaGetPayload<S extends boolean | null | undefined | estados_bombaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload, S>;
export type estados_bombaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<estados_bombaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Estados_bombaCountAggregateInputType | true;
};
export interface estados_bombaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['estados_bomba'];
        meta: {
            name: 'estados_bomba';
        };
    };
    findUnique<T extends estados_bombaFindUniqueArgs>(args: Prisma.SelectSubset<T, estados_bombaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends estados_bombaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, estados_bombaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends estados_bombaFindFirstArgs>(args?: Prisma.SelectSubset<T, estados_bombaFindFirstArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends estados_bombaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, estados_bombaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends estados_bombaFindManyArgs>(args?: Prisma.SelectSubset<T, estados_bombaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends estados_bombaCreateArgs>(args: Prisma.SelectSubset<T, estados_bombaCreateArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends estados_bombaCreateManyArgs>(args?: Prisma.SelectSubset<T, estados_bombaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends estados_bombaDeleteArgs>(args: Prisma.SelectSubset<T, estados_bombaDeleteArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends estados_bombaUpdateArgs>(args: Prisma.SelectSubset<T, estados_bombaUpdateArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends estados_bombaDeleteManyArgs>(args?: Prisma.SelectSubset<T, estados_bombaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends estados_bombaUpdateManyArgs>(args: Prisma.SelectSubset<T, estados_bombaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends estados_bombaUpsertArgs>(args: Prisma.SelectSubset<T, estados_bombaUpsertArgs<ExtArgs>>): Prisma.Prisma__estados_bombaClient<runtime.Types.Result.GetResult<Prisma.$estados_bombaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends estados_bombaCountArgs>(args?: Prisma.Subset<T, estados_bombaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Estados_bombaCountAggregateOutputType> : number>;
    aggregate<T extends Estados_bombaAggregateArgs>(args: Prisma.Subset<T, Estados_bombaAggregateArgs>): Prisma.PrismaPromise<GetEstados_bombaAggregateType<T>>;
    groupBy<T extends estados_bombaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: estados_bombaGroupByArgs['orderBy'];
    } : {
        orderBy?: estados_bombaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, estados_bombaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstados_bombaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: estados_bombaFieldRefs;
}
export interface Prisma__estados_bombaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface estados_bombaFieldRefs {
    readonly id: Prisma.FieldRef<"estados_bomba", 'Int'>;
    readonly estado: Prisma.FieldRef<"estados_bomba", 'estados_bomba_estado'>;
    readonly fecha: Prisma.FieldRef<"estados_bomba", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"estados_bomba", 'DateTime'>;
}
export type estados_bombaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where: Prisma.estados_bombaWhereUniqueInput;
};
export type estados_bombaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where: Prisma.estados_bombaWhereUniqueInput;
};
export type estados_bombaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where?: Prisma.estados_bombaWhereInput;
    orderBy?: Prisma.estados_bombaOrderByWithRelationInput | Prisma.estados_bombaOrderByWithRelationInput[];
    cursor?: Prisma.estados_bombaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_bombaScalarFieldEnum | Prisma.Estados_bombaScalarFieldEnum[];
};
export type estados_bombaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where?: Prisma.estados_bombaWhereInput;
    orderBy?: Prisma.estados_bombaOrderByWithRelationInput | Prisma.estados_bombaOrderByWithRelationInput[];
    cursor?: Prisma.estados_bombaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_bombaScalarFieldEnum | Prisma.Estados_bombaScalarFieldEnum[];
};
export type estados_bombaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where?: Prisma.estados_bombaWhereInput;
    orderBy?: Prisma.estados_bombaOrderByWithRelationInput | Prisma.estados_bombaOrderByWithRelationInput[];
    cursor?: Prisma.estados_bombaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Estados_bombaScalarFieldEnum | Prisma.Estados_bombaScalarFieldEnum[];
};
export type estados_bombaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.estados_bombaCreateInput, Prisma.estados_bombaUncheckedCreateInput>;
};
export type estados_bombaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.estados_bombaCreateManyInput | Prisma.estados_bombaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type estados_bombaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.estados_bombaUpdateInput, Prisma.estados_bombaUncheckedUpdateInput>;
    where: Prisma.estados_bombaWhereUniqueInput;
};
export type estados_bombaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.estados_bombaUpdateManyMutationInput, Prisma.estados_bombaUncheckedUpdateManyInput>;
    where?: Prisma.estados_bombaWhereInput;
    limit?: number;
};
export type estados_bombaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where: Prisma.estados_bombaWhereUniqueInput;
    create: Prisma.XOR<Prisma.estados_bombaCreateInput, Prisma.estados_bombaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.estados_bombaUpdateInput, Prisma.estados_bombaUncheckedUpdateInput>;
};
export type estados_bombaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
    where: Prisma.estados_bombaWhereUniqueInput;
};
export type estados_bombaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_bombaWhereInput;
    limit?: number;
};
export type estados_bombaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.estados_bombaSelect<ExtArgs> | null;
    omit?: Prisma.estados_bombaOmit<ExtArgs> | null;
};
