"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.zonasOrderByRelevanceFieldEnum = exports.usuariosOrderByRelevanceFieldEnum = exports.umbrales_riegoOrderByRelevanceFieldEnum = exports.rolesOrderByRelevanceFieldEnum = exports.lecturasOrderByRelevanceFieldEnum = exports.estados_valvulaOrderByRelevanceFieldEnum = exports.NullsOrder = exports.cultivosOrderByRelevanceFieldEnum = exports.SortOrder = exports.ZonasScalarFieldEnum = exports.UsuariosScalarFieldEnum = exports.Umbrales_riegoScalarFieldEnum = exports.RolesScalarFieldEnum = exports.LecturasScalarFieldEnum = exports.Estados_valvulaScalarFieldEnum = exports.Estados_bombaScalarFieldEnum = exports.CultivosScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    cultivos: 'cultivos',
    estados_bomba: 'estados_bomba',
    estados_valvula: 'estados_valvula',
    lecturas: 'lecturas',
    roles: 'roles',
    umbrales_riego: 'umbrales_riego',
    usuarios: 'usuarios',
    zonas: 'zonas'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CultivosScalarFieldEnum = {
    id_cultivo: 'id_cultivo',
    nombre: 'nombre',
    temperatura_min: 'temperatura_min',
    temperatura_max: 'temperatura_max',
    humedad_suelo_min: 'humedad_suelo_min',
    humedad_suelo_max: 'humedad_suelo_max'
};
exports.Estados_bombaScalarFieldEnum = {
    id: 'id',
    estado: 'estado',
    fecha: 'fecha',
    hora: 'hora'
};
exports.Estados_valvulaScalarFieldEnum = {
    id: 'id',
    codigo_zona: 'codigo_zona',
    estado: 'estado',
    fecha: 'fecha',
    hora: 'hora',
    motivo: 'motivo',
    id_usuario: 'id_usuario'
};
exports.LecturasScalarFieldEnum = {
    id: 'id',
    codigo_zona: 'codigo_zona',
    fecha: 'fecha',
    hora: 'hora',
    temperatura_c: 'temperatura_c',
    humedad_suelo: 'humedad_suelo',
    litros: 'litros'
};
exports.RolesScalarFieldEnum = {
    id_rol: 'id_rol',
    nombre: 'nombre',
    descripcion: 'descripcion'
};
exports.Umbrales_riegoScalarFieldEnum = {
    id: 'id',
    codigo_zona: 'codigo_zona',
    humedad_seca: 'humedad_seca',
    humedad_objetivo: 'humedad_objetivo',
    fecha_hora: 'fecha_hora',
    id_usuario: 'id_usuario'
};
exports.UsuariosScalarFieldEnum = {
    id_usuario: 'id_usuario',
    email: 'email',
    nombre: 'nombre',
    password: 'password',
    id_rol: 'id_rol',
    creado_el: 'creado_el'
};
exports.ZonasScalarFieldEnum = {
    codigo_zona: 'codigo_zona',
    nombre: 'nombre',
    id_cultivo: 'id_cultivo',
    superficie_m2: 'superficie_m2',
    caudal_l_min: 'caudal_l_min'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.cultivosOrderByRelevanceFieldEnum = {
    nombre: 'nombre'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.estados_valvulaOrderByRelevanceFieldEnum = {
    codigo_zona: 'codigo_zona'
};
exports.lecturasOrderByRelevanceFieldEnum = {
    codigo_zona: 'codigo_zona'
};
exports.rolesOrderByRelevanceFieldEnum = {
    nombre: 'nombre',
    descripcion: 'descripcion'
};
exports.umbrales_riegoOrderByRelevanceFieldEnum = {
    codigo_zona: 'codigo_zona'
};
exports.usuariosOrderByRelevanceFieldEnum = {
    email: 'email',
    nombre: 'nombre',
    password: 'password'
};
exports.zonasOrderByRelevanceFieldEnum = {
    codigo_zona: 'codigo_zona',
    nombre: 'nombre'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map