import{ User,  Advocate } from "../models/User.js";
import Post from "../models/post.js";


//  const getUser = async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const user = await User.findById(id);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }

const createAdvocateProfile = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const type =  user.type;
        

        if (type === "Advocate") {
            const{ 
                location,
                description,
                picturePath,
                age,
                enrollmentNO,
                gender,
                experience,
            } = req.body;
        

        const newAdvocate = new Advocate({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
                location,
                description,
                picturePath,
                age,
                enrollmentNO,
                gender,
                experience,
        });
        newAdvocate.advocate_id = user._id  // gives the advocate the same ID
        await newAdvocate.save();



        return res.status(201).json({message: "advocate profile created"});
    } }
    catch (error) {
        res.status(500).json({message: error.message})

    }
};

 const showPosts = async (req, res) =>{
    try {
       const result = Post.find();
       res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export {createAdvocateProfile, showPosts};
