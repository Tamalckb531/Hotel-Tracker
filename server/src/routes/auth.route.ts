import express from "express";
import { signupProcess } from "../controllers/auth.controller";
import { loginProcess } from "../controllers/auth.controller";

const router = express.Router();

router.post('/signup', signupProcess);
router.post('/login', loginProcess)

export default router;