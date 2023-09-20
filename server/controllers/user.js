import { User, Client, Advocate } from "../models/User.js";

const getUserProfile = async (req, res)=>{
    try {
        const {username}= req.params;
        
        const user = await User.findOne({username: username});
        const type = user.type;
        const _id = user._id;
        console.log(type);

        if (type == "Client"){
            const result = await Client.find({client_id : _id});
            // console.log(result);
            res.json(result);
        }
        if (type == "Advocate"){
            const result = await Advocate.find({advocate_id: _id});
            // console.log(result);
            res.json(result);
        }
        
        console.log(result);

    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export default getUserProfile;