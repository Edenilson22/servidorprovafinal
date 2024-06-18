import { Router } from "express";
import { listSchool, saveCourse } from "./controllers/school";
import { listBook, saveBook } from "./controllers/book";
const router = Router();

router.get("/schools", listSchool);
router.post("/courses", saveCourse);
router.get("/books", listBook);
router.post("/books", saveBook)


export { router };
