import express from "express()";
import { User, Client } from "../models/User";
import { createClientProfile } from "../controllers/Client";
import { verifyToken } from "../middleware/auth";

const router = express.router();

router.post("./:id", createClientProfile);

export default router;