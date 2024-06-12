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
exports.saveCourse = exports.listCourse = void 0;
const courses = [
    {
        "id": 1,
        "name": "BSI"
    },
    {
        "id": 2,
        "name": "Licenciatura"
    },
];
function listCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        //const client = await pool.connect();
        //realiza consulta sql
        //const courses = await client.query(`select * from courses`)
        //retorna consulta em formato json
        return res.status(200).json(courses);
    });
}
exports.listCourse = listCourse;
function saveCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = req.body;
        course.id = Math.floor(Math.random() * 50);
        courses.push(course);
        res.status(201).json(courses);
    });
}
exports.saveCourse = saveCourse;
