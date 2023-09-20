import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import OTP from "../models/otp.js"
import {User} from "../models/User.js"


   // REGISTER User
   export const register = async(req, res)=>{
    try {
        const {
            firstName,
            lastName, 
            email,
            password,
            type,
            otp
        } = req.body

          
        if (!firstName || !lastName ||!email || !password || !otp) {
            return res.status(403).json({
              success: false,
              message: 'All fields are required',
            });
          }
          // Check if user already exists
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({
              success: false,
              message: 'User already exists',
            });
          }
          // Find the most recent OTP for the email
          // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
          // if (response.length === 0 || otp !== response[0].otp) {
          //   return res.status(400).json({
          //     success: false,
          //     message: 'The OTP is not valid',
          //   });
          // }


       
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName, 
            email,
            password: passwordHash,
            type,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } 
    catch (error) {
        res.status(500).json({error: error.message});
    }
   };

//    LOGGING IN AS User
export const login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

