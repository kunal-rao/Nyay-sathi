import express from "express";
// import { User , Advocate} from "../models/User.js";
import  {createAdvocateProfile,  getUser }  from "../controllers/Advocate.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();
router.get("/getuser", getUser )

router.post('/:id',  createAdvocateProfile );

export default  router;