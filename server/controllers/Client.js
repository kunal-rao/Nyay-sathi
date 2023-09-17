 import { User, Client } from "../models/User";

 export const createClientProfile = async (req, res)=>{
   try {  
    const { id } = req.params;
    const user = await User.findById(id);
    
    
    if (user) {
    const roll = user.roll;
}

if (roll === "Advocate") {
    const{
        location,
        picturePath,
        age,
        gender,
    } = req.body;
}

const newClient = new Client({
    location,
    picturePath,
    age,
    gender,
});
newClient._id = newUser._id  // gives the advocate the same ID
await newClient.save();

return res.status(201).json({message: "advocate profile created"});
    
   } catch (error) {
    res.status(500).json({message: error.message})
   }
 };

 export {createClientProfile};