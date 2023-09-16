import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Client from "../models/Client.js";
import Advocate from "../models/Advocate.js";
import User from "../models/User.js";


   // REGISTER User
   export const register = async(req, res)=>{
    try {
        const {
            firstName,
            lastName, 
            email,
            password,
            roll,
        } = req.body
       
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName, 
            email,
            password: passwordHash,
            roll,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } 
    catch (error) {
        res.status(500).json({error: error.message});
    }
   };

//    LOGGING IN AS User
export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  REGISTERATION AS A ADVOCATE
// export const registerAdvocate = async (req, res) =>{
//     try {
//         const {
//             firstName,
//             lastName, 
//             phoneNo,
//             email,
//             password,
//             picturePath,
//             location, 
//             gender,
//             age,
//             barCode,
//             description,
//             experience,
//             college,
//         } = req.body;

//         const salt = await bcrypt.genSalt();
//         const passwordHash = await bcrypt.hash(password, salt);

//         const newAdvocate = new Advocate({
//             firstName,
//             lastName, 
//             phoneNo,
//             email,
//             password : passwordHash,
//             picturePath,
//             location, 
//             gender,
//             age,
//             barCode,
//             description,
//             experience,
//             college,
//         });

//         const savedAdvocate = await newAdvocate.save();
//         res.status(201).json(savedAdvocate);

//     } catch (error) {
        
//     }
// };

// // LOGGIN IN AS AN ADVOCATE
