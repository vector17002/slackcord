import express from "express";
import { SignUp, Login, Logout } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/signup", SignUp);

router.post("/login", Login);

router.get("/logout", Logout);

export default router;
