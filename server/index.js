import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// import { error } from "console";
// import {client} from "./models/Client.js";
// import Advocate from "./models/Advocate.js";
import { verifyToken } from "./middleware/auth.js";
import router from "./routes/auth.js";
import { register } from "./controllers/auth.js";
import { login } from "./controllers/auth.js";
import { User } from "./models/User.js";
import authRoutes from "./routes/auth.js";
import otpRoutes from "./routes/otp.js"
import clientRoutes from "./routes/Client.js"
import advocateRoutes from "./routes/Advocate.js"
import userRoutes from "./routes/user.js"



//CONFIGURATION  
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));


//FILE STORAGE 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });


//  ROUTES WITH FILE 
app.use('/client', verifyToken, upload.single("picture"), clientRoutes);
app.use('/advocate', verifyToken, upload.single("picture"), advocateRoutes);


//   ROUTES 
app.use("/auth", authRoutes);
app.use("/otp", otpRoutes);
app.use("/user", userRoutes);

//  MONGOOSE SETUP     
const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));
