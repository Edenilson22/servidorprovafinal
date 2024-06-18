"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveStudent = exports.listStudent = void 0;
const database_1 = require("../shared/database");
function listStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        //realiza consulta sql
        const students = yield client.query(`select * from students`);
        //retorna consulta em formato json
        return res.status(200).json(students.rows);
    });
}
exports.listStudent = listStudent;
function saveStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield database_1.pool.connect();
        const student = req.body;
        console.log(student);
        try {
            const response = yield client.query(`insert INTO students (name, email) VALUES ('${student.name}','${student.email}' ) RETURNING *`);
            console.log(response.rows[0]);
            res.status(201).json(response.rows[0]);
        }
        catch (error) {
            res.status(400).json({ message: 'Dados inválidos:', error });
        }
        finally {
            client.release();
        }
    });
}
exports.saveStudent = saveStudent;
