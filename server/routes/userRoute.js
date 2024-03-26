import express from "express";
import { getUsers } from "../controllers/getUserControllers.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute , getUsers);
export default router;
