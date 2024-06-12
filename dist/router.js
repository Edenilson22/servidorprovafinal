"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const course_1 = require("./controllers/course");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/courses", course_1.listCourse);
router.post("/courses", course_1.saveCourse);
