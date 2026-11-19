import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly cultivos: "cultivos";
    readonly estados_bomba: "estados_bomba";
    readonly estados_valvula: "estados_valvula";
    readonly lecturas: "lecturas";
    readonly roles: "roles";
    readonly umbrales_riego: "umbrales_riego";
    readonly usuarios: "usuarios";
    readonly zonas: "zonas";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CultivosScalarFieldEnum: {
    readonly id_cultivo: "id_cultivo";
    readonly nombre: "nombre";
    readonly temperatura_min: "temperatura_min";
    readonly temperatura_max: "temperatura_max";
    readonly humedad_suelo_min: "humedad_suelo_min";
    readonly humedad_suelo_max: "humedad_suelo_max";
};
export type CultivosScalarFieldEnum = (typeof CultivosScalarFieldEnum)[keyof typeof CultivosScalarFieldEnum];
export declare const Estados_bombaScalarFieldEnum: {
    readonly id: "id";
    readonly estado: "estado";
    readonly fecha: "fecha";
    readonly hora: "hora";
};
export type Estados_bombaScalarFieldEnum = (typeof Estados_bombaScalarFieldEnum)[keyof typeof Estados_bombaScalarFieldEnum];
export declare const Estados_valvulaScalarFieldEnum: {
    readonly id: "id";
    readonly codigo_zona: "codigo_zona";
    readonly estado: "estado";
    readonly fecha: "fecha";
    readonly hora: "hora";
    readonly motivo: "motivo";
    readonly id_usuario: "id_usuario";
};
export type Estados_valvulaScalarFieldEnum = (typeof Estados_valvulaScalarFieldEnum)[keyof typeof Estados_valvulaScalarFieldEnum];
export declare const LecturasScalarFieldEnum: {
    readonly id: "id";
    readonly codigo_zona: "codigo_zona";
    readonly fecha: "fecha";
    readonly hora: "hora";
    readonly temperatura_c: "temperatura_c";
    readonly humedad_suelo: "humedad_suelo";
    readonly litros: "litros";
};
export type LecturasScalarFieldEnum = (typeof LecturasScalarFieldEnum)[keyof typeof LecturasScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id_rol: "id_rol";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const Umbrales_riegoScalarFieldEnum: {
    readonly id: "id";
    readonly codigo_zona: "codigo_zona";
    readonly humedad_seca: "humedad_seca";
    readonly humedad_objetivo: "humedad_objetivo";
    readonly fecha_hora: "fecha_hora";
    readonly id_usuario: "id_usuario";
};
export type Umbrales_riegoScalarFieldEnum = (typeof Umbrales_riegoScalarFieldEnum)[keyof typeof Umbrales_riegoScalarFieldEnum];
export declare const UsuariosScalarFieldEnum: {
    readonly id_usuario: "id_usuario";
    readonly email: "email";
    readonly nombre: "nombre";
    readonly password: "password";
    readonly id_rol: "id_rol";
    readonly creado_el: "creado_el";
};
export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum];
export declare const ZonasScalarFieldEnum: {
    readonly codigo_zona: "codigo_zona";
    readonly nombre: "nombre";
    readonly id_cultivo: "id_cultivo";
    readonly superficie_m2: "superficie_m2";
    readonly caudal_l_min: "caudal_l_min";
};
export type ZonasScalarFieldEnum = (typeof ZonasScalarFieldEnum)[keyof typeof ZonasScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const cultivosOrderByRelevanceFieldEnum: {
    readonly nombre: "nombre";
};
export type cultivosOrderByRelevanceFieldEnum = (typeof cultivosOrderByRelevanceFieldEnum)[keyof typeof cultivosOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const estados_valvulaOrderByRelevanceFieldEnum: {
    readonly codigo_zona: "codigo_zona";
};
export type estados_valvulaOrderByRelevanceFieldEnum = (typeof estados_valvulaOrderByRelevanceFieldEnum)[keyof typeof estados_valvulaOrderByRelevanceFieldEnum];
export declare const lecturasOrderByRelevanceFieldEnum: {
    readonly codigo_zona: "codigo_zona";
};
export type lecturasOrderByRelevanceFieldEnum = (typeof lecturasOrderByRelevanceFieldEnum)[keyof typeof lecturasOrderByRelevanceFieldEnum];
export declare const rolesOrderByRelevanceFieldEnum: {
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum];
export declare const umbrales_riegoOrderByRelevanceFieldEnum: {
    readonly codigo_zona: "codigo_zona";
};
export type umbrales_riegoOrderByRelevanceFieldEnum = (typeof umbrales_riegoOrderByRelevanceFieldEnum)[keyof typeof umbrales_riegoOrderByRelevanceFieldEnum];
export declare const usuariosOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly nombre: "nombre";
    readonly password: "password";
};
export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum];
export declare const zonasOrderByRelevanceFieldEnum: {
    readonly codigo_zona: "codigo_zona";
    readonly nombre: "nombre";
};
export type zonasOrderByRelevanceFieldEnum = (typeof zonasOrderByRelevanceFieldEnum)[keyof typeof zonasOrderByRelevanceFieldEnum];
