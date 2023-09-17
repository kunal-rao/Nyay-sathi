
import express from 'express';
// const otpController = require('../controllers/optController');
// import otpController from "../controllers/optController.js"
import sendOTP from "../controllers/optController.js"


const router = express.Router();
router.post('/send-otp', sendOTP);

 export default router;