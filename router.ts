import { Router } from "express";
import { listSchool, saveSchool } from "./controllers/school";
import { listComputer, saveComputer } from "./controllers/computer";
const router = Router();

router.get("/schools", listSchool);
router.post("/schools", saveSchool);
router.get("/computers", listComputer);
router.post("/computers", saveComputer)


export { router };
