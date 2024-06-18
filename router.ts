import { Router } from "express";
import { listSchool, saveSchool } from "./controllers/school";
import { listComputer, saveBook } from "./controllers/computer";
const router = Router();

router.get("/schools", listSchool);
router.post("/schools", saveSchool);
router.get("/books", listComputer);
router.post("/books", saveBook)


export { router };
