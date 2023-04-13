import { Router } from "express";
import jokeRoute from "./jokes.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/jokes", jokeRoute);

export default router;