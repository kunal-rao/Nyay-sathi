import express from "express";
// import { User, Client } from "../models/User.js";
import { createClientProfile, searchAdvocateOnLocation } from "../controllers/Client.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/:id", createClientProfile);
router.get("/search/:id/",  searchAdvocateOnLocation);

export default router;