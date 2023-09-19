import express from "express";
// import { User, Client } from "../models/User.js";
import { createClientProfile } from "../controllers/Client.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/:id",verifyToken, createClientProfile);

export default router;