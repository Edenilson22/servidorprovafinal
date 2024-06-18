import { Router } from "express";
import { listPrinter, savePrinter } from "./controllers/printer";
import { listComputer, saveComputer } from "./controllers/computer";
const router = Router();

router.get("/printers", listPrinter);
router.post("/printers", savePrinter);
router.get("/computers", listComputer);
router.post("/computers", saveComputer)


export { router };
