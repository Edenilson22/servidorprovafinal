import { Router } from "express";
import { listSchool, saveSchool } from "./controllers/school";
import { listBook, saveBook } from "./controllers/book";
const router = Router();

router.get("/schools", listSchool);
router.post("/schools", saveSchool);
router.get("/books", listBook);
router.post("/books", saveBook)


export { router };
