import { User, Client, Advocate } from "../models/User.js";

export const createClientProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const type =  user.type;


    if (type === "Client") {
      const {
        location,
        picturePath,
        age,
        gender,
        
      } = req.body;
    

    const newClient = new Client({
      location,
      picturePath,
      age,
      gender,

    });
    newClient.client_id = user._id  // gives the advocate the same ID
    await newClient.save();

    return res.status(201).json({ message: `client profile created ${id}` });
  }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` })
  }
};

// getting advocate result based on location of the user.
export const searchAdvocateOnLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({client_id: id});
    const location =  client.location;
    console.log(location);

    let result =  await Advocate.find({ location: location });
    res.status(201).json(result);



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createClientProfile, searchAdvocateOnLocation };