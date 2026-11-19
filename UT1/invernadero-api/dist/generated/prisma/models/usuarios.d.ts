import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type usuariosModel = runtime.Types.Result.DefaultSelection<Prisma.$usuariosPayload>;
export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null;
    id_rol: number | null;
};
export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null;
    id_rol: number | null;
};
export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null;
    email: string | null;
    nombre: string | null;
    password: string | null;
    id_rol: number | null;
    creado_el: Date | null;
};
export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null;
    email: string | null;
    nombre: string | null;
    password: string | null;
    id_rol: number | null;
    creado_el: Date | null;
};
export type UsuariosCountAggregateOutputType = {
    id_usuario: number;
    email: number;
    nombre: number;
    password: number;
    id_rol: number;
    creado_el: number;
    _all: number;
};
export type UsuariosAvgAggregateInputType = {
    id_usuario?: true;
    id_rol?: true;
};
export type UsuariosSumAggregateInputType = {
    id_usuario?: true;
    id_rol?: true;
};
export type UsuariosMinAggregateInputType = {
    id_usuario?: true;
    email?: true;
    nombre?: true;
    password?: true;
    id_rol?: true;
    creado_el?: true;
};
export type UsuariosMaxAggregateInputType = {
    id_usuario?: true;
    email?: true;
    nombre?: true;
    password?: true;
    id_rol?: true;
    creado_el?: true;
};
export type UsuariosCountAggregateInputType = {
    id_usuario?: true;
    email?: true;
    nombre?: true;
    password?: true;
    id_rol?: true;
    creado_el?: true;
    _all?: true;
};
export type UsuariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuariosCountAggregateInputType;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarios[P]> : Prisma.GetScalarType<T[P], AggregateUsuarios[P]>;
};
export type usuariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithAggregationInput | Prisma.usuariosOrderByWithAggregationInput[];
    by: Prisma.UsuariosScalarFieldEnum[] | Prisma.UsuariosScalarFieldEnum;
    having?: Prisma.usuariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuariosCountAggregateInputType | true;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type UsuariosGroupByOutputType = {
    id_usuario: number;
    email: string;
    nombre: string;
    password: string;
    id_rol: number;
    creado_el: Date;
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]>;
}>>;
export type usuariosWhereInput = {
    AND?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    OR?: Prisma.usuariosWhereInput[];
    NOT?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    id_usuario?: Prisma.IntFilter<"usuarios"> | number;
    email?: Prisma.StringFilter<"usuarios"> | string;
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    password?: Prisma.StringFilter<"usuarios"> | string;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    creado_el?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
    estados_valvula?: Prisma.Estados_valvulaListRelationFilter;
    umbrales_riego?: Prisma.Umbrales_riegoListRelationFilter;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
};
export type usuariosOrderByWithRelationInput = {
    id_usuario?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    creado_el?: Prisma.SortOrder;
    estados_valvula?: Prisma.estados_valvulaOrderByRelationAggregateInput;
    umbrales_riego?: Prisma.umbrales_riegoOrderByRelationAggregateInput;
    roles?: Prisma.rolesOrderByWithRelationInput;
    _relevance?: Prisma.usuariosOrderByRelevanceInput;
};
export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number;
    email?: string;
    AND?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    OR?: Prisma.usuariosWhereInput[];
    NOT?: Prisma.usuariosWhereInput | Prisma.usuariosWhereInput[];
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    password?: Prisma.StringFilter<"usuarios"> | string;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    creado_el?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
    estados_valvula?: Prisma.Estados_valvulaListRelationFilter;
    umbrales_riego?: Prisma.Umbrales_riegoListRelationFilter;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
}, "id_usuario" | "email">;
export type usuariosOrderByWithAggregationInput = {
    id_usuario?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    creado_el?: Prisma.SortOrder;
    _count?: Prisma.usuariosCountOrderByAggregateInput;
    _avg?: Prisma.usuariosAvgOrderByAggregateInput;
    _max?: Prisma.usuariosMaxOrderByAggregateInput;
    _min?: Prisma.usuariosMinOrderByAggregateInput;
    _sum?: Prisma.usuariosSumOrderByAggregateInput;
};
export type usuariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuariosScalarWhereWithAggregatesInput | Prisma.usuariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuariosScalarWhereWithAggregatesInput | Prisma.usuariosScalarWhereWithAggregatesInput[];
    id_usuario?: Prisma.IntWithAggregatesFilter<"usuarios"> | number;
    email?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    password?: Prisma.StringWithAggregatesFilter<"usuarios"> | string;
    id_rol?: Prisma.IntWithAggregatesFilter<"usuarios"> | number;
    creado_el?: Prisma.DateTimeWithAggregatesFilter<"usuarios"> | Date | string;
};
export type usuariosCreateInput = {
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutUsuariosInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutUsuariosInput;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    id_rol: number;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutUsuariosInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutUsuariosNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutUsuariosNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutUsuariosNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosCreateManyInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    id_rol: number;
    creado_el?: Date | string;
};
export type usuariosUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuariosNullableScalarRelationFilter = {
    is?: Prisma.usuariosWhereInput | null;
    isNot?: Prisma.usuariosWhereInput | null;
};
export type UsuariosListRelationFilter = {
    every?: Prisma.usuariosWhereInput;
    some?: Prisma.usuariosWhereInput;
    none?: Prisma.usuariosWhereInput;
};
export type usuariosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type usuariosOrderByRelevanceInput = {
    fields: Prisma.usuariosOrderByRelevanceFieldEnum | Prisma.usuariosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usuariosCountOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    creado_el?: Prisma.SortOrder;
};
export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
};
export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    creado_el?: Prisma.SortOrder;
};
export type usuariosMinOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    creado_el?: Prisma.SortOrder;
};
export type usuariosSumOrderByAggregateInput = {
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
};
export type usuariosCreateNestedOneWithoutEstados_valvulaInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedCreateWithoutEstados_valvulaInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutEstados_valvulaInput;
    connect?: Prisma.usuariosWhereUniqueInput;
};
export type usuariosUpdateOneWithoutEstados_valvulaNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedCreateWithoutEstados_valvulaInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutEstados_valvulaInput;
    upsert?: Prisma.usuariosUpsertWithoutEstados_valvulaInput;
    disconnect?: Prisma.usuariosWhereInput | boolean;
    delete?: Prisma.usuariosWhereInput | boolean;
    connect?: Prisma.usuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuariosUpdateToOneWithWhereWithoutEstados_valvulaInput, Prisma.usuariosUpdateWithoutEstados_valvulaInput>, Prisma.usuariosUncheckedUpdateWithoutEstados_valvulaInput>;
};
export type usuariosCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
};
export type usuariosUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutRolesInput | Prisma.usuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput> | Prisma.usuariosCreateWithoutRolesInput[] | Prisma.usuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutRolesInput | Prisma.usuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.usuariosCreateManyRolesInputEnvelope;
    set?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    disconnect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    delete?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    connect?: Prisma.usuariosWhereUniqueInput | Prisma.usuariosWhereUniqueInput[];
    update?: Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.usuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.usuariosUpdateManyWithWhereWithoutRolesInput | Prisma.usuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
};
export type usuariosCreateNestedOneWithoutUmbrales_riegoInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedCreateWithoutUmbrales_riegoInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutUmbrales_riegoInput;
    connect?: Prisma.usuariosWhereUniqueInput;
};
export type usuariosUpdateOneWithoutUmbrales_riegoNestedInput = {
    create?: Prisma.XOR<Prisma.usuariosCreateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedCreateWithoutUmbrales_riegoInput>;
    connectOrCreate?: Prisma.usuariosCreateOrConnectWithoutUmbrales_riegoInput;
    upsert?: Prisma.usuariosUpsertWithoutUmbrales_riegoInput;
    disconnect?: Prisma.usuariosWhereInput | boolean;
    delete?: Prisma.usuariosWhereInput | boolean;
    connect?: Prisma.usuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuariosUpdateToOneWithWhereWithoutUmbrales_riegoInput, Prisma.usuariosUpdateWithoutUmbrales_riegoInput>, Prisma.usuariosUncheckedUpdateWithoutUmbrales_riegoInput>;
};
export type usuariosCreateWithoutEstados_valvulaInput = {
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutUsuariosInput;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutEstados_valvulaInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    id_rol: number;
    creado_el?: Date | string;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosCreateOrConnectWithoutEstados_valvulaInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedCreateWithoutEstados_valvulaInput>;
};
export type usuariosUpsertWithoutEstados_valvulaInput = {
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedUpdateWithoutEstados_valvulaInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedCreateWithoutEstados_valvulaInput>;
    where?: Prisma.usuariosWhereInput;
};
export type usuariosUpdateToOneWithWhereWithoutEstados_valvulaInput = {
    where?: Prisma.usuariosWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutEstados_valvulaInput, Prisma.usuariosUncheckedUpdateWithoutEstados_valvulaInput>;
};
export type usuariosUpdateWithoutEstados_valvulaInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutUsuariosNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutEstados_valvulaInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosCreateWithoutRolesInput = {
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutUsuariosInput;
    umbrales_riego?: Prisma.umbrales_riegoCreateNestedManyWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutRolesInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutUsuariosInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosCreateOrConnectWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput>;
};
export type usuariosCreateManyRolesInputEnvelope = {
    data: Prisma.usuariosCreateManyRolesInput | Prisma.usuariosCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type usuariosUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutRolesInput, Prisma.usuariosUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutRolesInput, Prisma.usuariosUncheckedCreateWithoutRolesInput>;
};
export type usuariosUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.usuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutRolesInput, Prisma.usuariosUncheckedUpdateWithoutRolesInput>;
};
export type usuariosUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.usuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateManyMutationInput, Prisma.usuariosUncheckedUpdateManyWithoutRolesInput>;
};
export type usuariosScalarWhereInput = {
    AND?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
    OR?: Prisma.usuariosScalarWhereInput[];
    NOT?: Prisma.usuariosScalarWhereInput | Prisma.usuariosScalarWhereInput[];
    id_usuario?: Prisma.IntFilter<"usuarios"> | number;
    email?: Prisma.StringFilter<"usuarios"> | string;
    nombre?: Prisma.StringFilter<"usuarios"> | string;
    password?: Prisma.StringFilter<"usuarios"> | string;
    id_rol?: Prisma.IntFilter<"usuarios"> | number;
    creado_el?: Prisma.DateTimeFilter<"usuarios"> | Date | string;
};
export type usuariosCreateWithoutUmbrales_riegoInput = {
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaCreateNestedManyWithoutUsuariosInput;
    roles: Prisma.rolesCreateNestedOneWithoutUsuariosInput;
};
export type usuariosUncheckedCreateWithoutUmbrales_riegoInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    id_rol: number;
    creado_el?: Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type usuariosCreateOrConnectWithoutUmbrales_riegoInput = {
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedCreateWithoutUmbrales_riegoInput>;
};
export type usuariosUpsertWithoutUmbrales_riegoInput = {
    update: Prisma.XOR<Prisma.usuariosUpdateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedUpdateWithoutUmbrales_riegoInput>;
    create: Prisma.XOR<Prisma.usuariosCreateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedCreateWithoutUmbrales_riegoInput>;
    where?: Prisma.usuariosWhereInput;
};
export type usuariosUpdateToOneWithWhereWithoutUmbrales_riegoInput = {
    where?: Prisma.usuariosWhereInput;
    data: Prisma.XOR<Prisma.usuariosUpdateWithoutUmbrales_riegoInput, Prisma.usuariosUncheckedUpdateWithoutUmbrales_riegoInput>;
};
export type usuariosUpdateWithoutUmbrales_riegoInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutUsuariosNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutUmbrales_riegoInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosCreateManyRolesInput = {
    id_usuario?: number;
    email: string;
    nombre: string;
    password: string;
    creado_el?: Date | string;
};
export type usuariosUpdateWithoutRolesInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUpdateManyWithoutUsuariosNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateWithoutRolesInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estados_valvula?: Prisma.estados_valvulaUncheckedUpdateManyWithoutUsuariosNestedInput;
    umbrales_riego?: Prisma.umbrales_riegoUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type usuariosUncheckedUpdateManyWithoutRolesInput = {
    id_usuario?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_el?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuariosCountOutputType = {
    estados_valvula: number;
    umbrales_riego: number;
};
export type UsuariosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estados_valvula?: boolean | UsuariosCountOutputTypeCountEstados_valvulaArgs;
    umbrales_riego?: boolean | UsuariosCountOutputTypeCountUmbrales_riegoArgs;
};
export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuariosCountOutputTypeCountEstados_valvulaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.estados_valvulaWhereInput;
};
export type UsuariosCountOutputTypeCountUmbrales_riegoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.umbrales_riegoWhereInput;
};
export type usuariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_usuario?: boolean;
    email?: boolean;
    nombre?: boolean;
    password?: boolean;
    id_rol?: boolean;
    creado_el?: boolean;
    estados_valvula?: boolean | Prisma.usuarios$estados_valvulaArgs<ExtArgs>;
    umbrales_riego?: boolean | Prisma.usuarios$umbrales_riegoArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type usuariosSelectScalar = {
    id_usuario?: boolean;
    email?: boolean;
    nombre?: boolean;
    password?: boolean;
    id_rol?: boolean;
    creado_el?: boolean;
};
export type usuariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_usuario" | "email" | "nombre" | "password" | "id_rol" | "creado_el", ExtArgs["result"]["usuarios"]>;
export type usuariosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estados_valvula?: boolean | Prisma.usuarios$estados_valvulaArgs<ExtArgs>;
    umbrales_riego?: boolean | Prisma.usuarios$umbrales_riegoArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $usuariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuarios";
    objects: {
        estados_valvula: Prisma.$estados_valvulaPayload<ExtArgs>[];
        umbrales_riego: Prisma.$umbrales_riegoPayload<ExtArgs>[];
        roles: Prisma.$rolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_usuario: number;
        email: string;
        nombre: string;
        password: string;
        id_rol: number;
        creado_el: Date;
    }, ExtArgs["result"]["usuarios"]>;
    composites: {};
};
export type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuariosPayload, S>;
export type usuariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuariosCountAggregateInputType | true;
};
export interface usuariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuarios'];
        meta: {
            name: 'usuarios';
        };
    };
    findUnique<T extends usuariosFindUniqueArgs>(args: Prisma.SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usuariosFindFirstArgs>(args?: Prisma.SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usuariosFindManyArgs>(args?: Prisma.SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usuariosCreateArgs>(args: Prisma.SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usuariosCreateManyArgs>(args?: Prisma.SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends usuariosDeleteArgs>(args: Prisma.SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usuariosUpdateArgs>(args: Prisma.SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usuariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usuariosUpdateManyArgs>(args: Prisma.SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends usuariosUpsertArgs>(args: Prisma.SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usuariosCountArgs>(args?: Prisma.Subset<T, usuariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuariosCountAggregateOutputType> : number>;
    aggregate<T extends UsuariosAggregateArgs>(args: Prisma.Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>;
    groupBy<T extends usuariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuariosGroupByArgs['orderBy'];
    } : {
        orderBy?: usuariosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usuariosFieldRefs;
}
export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estados_valvula<T extends Prisma.usuarios$estados_valvulaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarios$estados_valvulaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$estados_valvulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    umbrales_riego<T extends Prisma.usuarios$umbrales_riegoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarios$umbrales_riegoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$umbrales_riegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usuariosFieldRefs {
    readonly id_usuario: Prisma.FieldRef<"usuarios", 'Int'>;
    readonly email: Prisma.FieldRef<"usuarios", 'String'>;
    readonly nombre: Prisma.FieldRef<"usuarios", 'String'>;
    readonly password: Prisma.FieldRef<"usuarios", 'String'>;
    readonly id_rol: Prisma.FieldRef<"usuarios", 'Int'>;
    readonly creado_el: Prisma.FieldRef<"usuarios", 'DateTime'>;
}
export type usuariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type usuariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type usuariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where?: Prisma.usuariosWhereInput;
    orderBy?: Prisma.usuariosOrderByWithRelationInput | Prisma.usuariosOrderByWithRelationInput[];
    cursor?: Prisma.usuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type usuariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuariosCreateInput, Prisma.usuariosUncheckedCreateInput>;
};
export type usuariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usuariosCreateManyInput | Prisma.usuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuariosUpdateInput, Prisma.usuariosUncheckedUpdateInput>;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usuariosUpdateManyMutationInput, Prisma.usuariosUncheckedUpdateManyInput>;
    where?: Prisma.usuariosWhereInput;
    limit?: number;
};
export type usuariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuariosCreateInput, Prisma.usuariosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usuariosUpdateInput, Prisma.usuariosUncheckedUpdateInput>;
};
export type usuariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
    where: Prisma.usuariosWhereUniqueInput;
};
export type usuariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuariosWhereInput;
    limit?: number;
};
export type usuarios$estados_valvulaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuarios$umbrales_riegoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type usuariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuariosSelect<ExtArgs> | null;
    omit?: Prisma.usuariosOmit<ExtArgs> | null;
    include?: Prisma.usuariosInclude<ExtArgs> | null;
};
