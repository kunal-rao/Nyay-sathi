import User, { Advocate } from "../models/User";


export const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createAdvocateProfile = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (user) {
            // const { roll } = req.user;
            const roll = user.roll;
        }

        if (roll === "Advocate") {
            const{
                discription,
                location,
                picturePath,
                age,
                enrollmentNO,
                gender,
                experience,
            } = req.body;
        }

        const newAdvocate = new Advocate({
            discription,
                location,
                picturePath,
                age,
                enrollmentNO,
                gender,
                experience,
        });
        newAdvocate._id = newUser._id  // gives the advocate the same ID
        await newAdvocate.save();



        return res.status(201).json({message: "advocate profile created"});
    } catch (error) {
        res.status(500).json({message: error.message})

    }
};




export { getUser, createAdvocateProfile};