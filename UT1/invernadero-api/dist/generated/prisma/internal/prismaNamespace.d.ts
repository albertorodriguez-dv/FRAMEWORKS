import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "cultivos" | "estados_bomba" | "estados_valvula" | "lecturas" | "roles" | "umbrales_riego" | "usuarios" | "zonas";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        cultivos: {
            payload: Prisma.$cultivosPayload<ExtArgs>;
            fields: Prisma.cultivosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cultivosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cultivosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                findFirst: {
                    args: Prisma.cultivosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cultivosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                findMany: {
                    args: Prisma.cultivosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>[];
                };
                create: {
                    args: Prisma.cultivosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                createMany: {
                    args: Prisma.cultivosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cultivosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                update: {
                    args: Prisma.cultivosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                deleteMany: {
                    args: Prisma.cultivosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cultivosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cultivosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cultivosPayload>;
                };
                aggregate: {
                    args: Prisma.CultivosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCultivos>;
                };
                groupBy: {
                    args: Prisma.cultivosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CultivosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cultivosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CultivosCountAggregateOutputType> | number;
                };
            };
        };
        estados_bomba: {
            payload: Prisma.$estados_bombaPayload<ExtArgs>;
            fields: Prisma.estados_bombaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.estados_bombaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.estados_bombaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                findFirst: {
                    args: Prisma.estados_bombaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.estados_bombaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                findMany: {
                    args: Prisma.estados_bombaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>[];
                };
                create: {
                    args: Prisma.estados_bombaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                createMany: {
                    args: Prisma.estados_bombaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.estados_bombaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                update: {
                    args: Prisma.estados_bombaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                deleteMany: {
                    args: Prisma.estados_bombaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.estados_bombaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.estados_bombaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_bombaPayload>;
                };
                aggregate: {
                    args: Prisma.Estados_bombaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstados_bomba>;
                };
                groupBy: {
                    args: Prisma.estados_bombaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Estados_bombaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.estados_bombaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Estados_bombaCountAggregateOutputType> | number;
                };
            };
        };
        estados_valvula: {
            payload: Prisma.$estados_valvulaPayload<ExtArgs>;
            fields: Prisma.estados_valvulaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.estados_valvulaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.estados_valvulaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                findFirst: {
                    args: Prisma.estados_valvulaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.estados_valvulaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                findMany: {
                    args: Prisma.estados_valvulaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>[];
                };
                create: {
                    args: Prisma.estados_valvulaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                createMany: {
                    args: Prisma.estados_valvulaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.estados_valvulaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                update: {
                    args: Prisma.estados_valvulaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                deleteMany: {
                    args: Prisma.estados_valvulaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.estados_valvulaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.estados_valvulaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$estados_valvulaPayload>;
                };
                aggregate: {
                    args: Prisma.Estados_valvulaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstados_valvula>;
                };
                groupBy: {
                    args: Prisma.estados_valvulaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Estados_valvulaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.estados_valvulaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Estados_valvulaCountAggregateOutputType> | number;
                };
            };
        };
        lecturas: {
            payload: Prisma.$lecturasPayload<ExtArgs>;
            fields: Prisma.lecturasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lecturasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lecturasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                findFirst: {
                    args: Prisma.lecturasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lecturasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                findMany: {
                    args: Prisma.lecturasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>[];
                };
                create: {
                    args: Prisma.lecturasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                createMany: {
                    args: Prisma.lecturasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.lecturasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                update: {
                    args: Prisma.lecturasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                deleteMany: {
                    args: Prisma.lecturasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lecturasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.lecturasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lecturasPayload>;
                };
                aggregate: {
                    args: Prisma.LecturasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLecturas>;
                };
                groupBy: {
                    args: Prisma.lecturasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LecturasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lecturasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LecturasCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        umbrales_riego: {
            payload: Prisma.$umbrales_riegoPayload<ExtArgs>;
            fields: Prisma.umbrales_riegoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.umbrales_riegoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.umbrales_riegoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                findFirst: {
                    args: Prisma.umbrales_riegoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.umbrales_riegoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                findMany: {
                    args: Prisma.umbrales_riegoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>[];
                };
                create: {
                    args: Prisma.umbrales_riegoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                createMany: {
                    args: Prisma.umbrales_riegoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.umbrales_riegoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                update: {
                    args: Prisma.umbrales_riegoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                deleteMany: {
                    args: Prisma.umbrales_riegoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.umbrales_riegoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.umbrales_riegoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$umbrales_riegoPayload>;
                };
                aggregate: {
                    args: Prisma.Umbrales_riegoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUmbrales_riego>;
                };
                groupBy: {
                    args: Prisma.umbrales_riegoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Umbrales_riegoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.umbrales_riegoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Umbrales_riegoCountAggregateOutputType> | number;
                };
            };
        };
        usuarios: {
            payload: Prisma.$usuariosPayload<ExtArgs>;
            fields: Prisma.usuariosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuariosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                findFirst: {
                    args: Prisma.usuariosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                findMany: {
                    args: Prisma.usuariosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>[];
                };
                create: {
                    args: Prisma.usuariosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                createMany: {
                    args: Prisma.usuariosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usuariosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                update: {
                    args: Prisma.usuariosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                deleteMany: {
                    args: Prisma.usuariosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuariosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usuariosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>;
                };
                aggregate: {
                    args: Prisma.UsuariosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarios>;
                };
                groupBy: {
                    args: Prisma.usuariosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuariosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosCountAggregateOutputType> | number;
                };
            };
        };
        zonas: {
            payload: Prisma.$zonasPayload<ExtArgs>;
            fields: Prisma.zonasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.zonasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.zonasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                findFirst: {
                    args: Prisma.zonasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.zonasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                findMany: {
                    args: Prisma.zonasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>[];
                };
                create: {
                    args: Prisma.zonasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                createMany: {
                    args: Prisma.zonasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.zonasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                update: {
                    args: Prisma.zonasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                deleteMany: {
                    args: Prisma.zonasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.zonasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.zonasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$zonasPayload>;
                };
                aggregate: {
                    args: Prisma.ZonasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateZonas>;
                };
                groupBy: {
                    args: Prisma.zonasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZonasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.zonasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZonasCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type Enumestados_bomba_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estados_bomba_estado'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type Enumestados_valvula_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estados_valvula_estado'>;
export type Enumestados_valvula_motivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estados_valvula_motivo'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    cultivos?: Prisma.cultivosOmit;
    estados_bomba?: Prisma.estados_bombaOmit;
    estados_valvula?: Prisma.estados_valvulaOmit;
    lecturas?: Prisma.lecturasOmit;
    roles?: Prisma.rolesOmit;
    umbrales_riego?: Prisma.umbrales_riegoOmit;
    usuarios?: Prisma.usuariosOmit;
    zonas?: Prisma.zonasOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
