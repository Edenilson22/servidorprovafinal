"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.pool = void 0;
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL;
exports.pool = new pg_1.Pool({
    connectionString,
    max: 10, // Número máximo de clientes no pool
    idleTimeoutMillis: 30000, // Tempo de inatividade antes de uma conexão ser fechada
    connectionTimeoutMillis: 6000, // Tempo máximo para tentar conectar antes de falhar
});
exports.pool.on('error', (err, client) => {
    console.error('Erro inesperado no cliente do pool', err);
    process.exit(-1);
});
exports.client = new pg_1.Client({
    connectionString,
});
