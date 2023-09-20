import Post from "../models/post";
import { User, Client, Advocate } from "../models/User";

 
    // CREATING A POST 
export const createPost = async(req , res)=>{
try {
    const { client_id ,  description, picturePath, legalService, subLegalService } = req.body;
    const user = await User.findById(client_id);
    const client = await client.find({ client_id: client_id});

    const newPost = new Post({
      client_id,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      legalService,
      subLegalService,
    });
    await newPost.save();

    const post = await post.find();
    res.status(201).json(post);

} catch (error) {
    res.status(500).json({message : error.message})
}
};

export {createPost};