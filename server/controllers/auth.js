import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Client from "../models/Client.js";
import Advocate from "../models/Advocate.js";


   // REGISTER CLIENT   
   export const register = async(req, res)=>{
    try {
        const {
            firstName,
            lastName, 
            phoneNo,
            email,
            password,
            // picturePath,
            // location, 
            // gender,
            // age,
        } = req.body
       
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newClient = new Client({
            firstName,
            lastName, 
            phoneNo,
            email,
            password : passwordHash,
            // picturePath,
            // location, 
            // gender,
            // age,
        });

        const savedClient = await newClient.save();
        res.status(201).json(savedClient);

    } 
    catch (error) {
        res.status(500).json({error: error.message});
    }
   };

//    LOGGING IN
export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const client = await Client.findOne({ email: email });
        if (!client) return res.status(400).json({ msg: "User does not exist. " });
        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET);
        delete client.password;
        res.status(200).json({ token, client });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}