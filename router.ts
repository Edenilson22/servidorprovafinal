import { Router } from "express";
import { listCourse, saveCourse } from "./controllers/course";
import { listStudent, saveStudent } from "./controllers/book";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse);
router.get("/students", listStudent);
router.post("/students", saveStudent)


export { router };
