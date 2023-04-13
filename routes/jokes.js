import { Router } from "express";
import * as controllers from "../controllers/jokes.js"

const router = Router();

router.get("/", controllers.getJokes);
router.get("/:id", controllers.getJoke);
router.post("/", controllers.createJoke);
router.put("/:id", controllers.updateJoke);
router.delete("/:id", controllers.deleteJoke);

export default router;