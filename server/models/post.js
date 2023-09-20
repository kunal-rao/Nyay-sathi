import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: {
    type:String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName:{
    type: String,
    require: true,
  },
  location:{
  type: String,
  },
  legalService:{
    type: String,
    require: true,
  },
  subLegalService:{
    type: String,
    require: true,
  },
  discription:{
    type: String,
    max:10000,
     require: true,
  },
  picturePath: {
    type: String,
  },
//   date: {

//   },
price:{
    type: String,
},
proposal:{
    type: Number,
}

},
{timestamps: true}
)

const Post = mongoose.model("Post", PostSchema);
export default Post;