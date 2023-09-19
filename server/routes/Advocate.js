import express from "express";
// import { User , Advocate} from "../models/User.js";
import  createAdvocateProfile  from "../controllers/Advocate.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

router.post('/:id', verifyToken, createAdvocateProfile );

export default  router;