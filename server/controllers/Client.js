 import { User, Client } from "../models/User.js";

 export const createClientProfile = async (req, res)=>{
   try {  
    const { id } = req.params;
    const user = await User.findById(id);
    
    
    if (user) {
    const roll = user.roll;
}

if (roll === "Client") {
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
newClient.client_id = newUser._id  // gives the advocate the same ID
await newClient.save();

return res.status(201).json({message: "client profile created"});
    
   } catch (error) {
    res.status(500).json({message: error.message})
   }
 };

 // getting advocate result based on location of the user.
export const searchAdvocateOnLocation = async(req, res)=>{
  try {
    const {client_id} = req.params;
    const client = await Client.findById(client_id);
    const location = client.location;

    
  } catch (error) {
    
  }
};

 export default createClientProfile;