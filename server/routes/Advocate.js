import express from "express()";
import { User, Advocate } from "../models/User";
import { createAdvocateProfile } from "../controllers/Advocate";
import { verifyToken } from "../middleware/auth";


const router = express.router();

router.post('/:id',verifyToken, createAdvocateProfile );

export default  router;