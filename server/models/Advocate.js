import mongoose from "mongoose";

const AdvocateSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },

        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        phoneNo: {
            type: Number,
            require: true,
            max: 9999999999,
        },
        email: {
            type: String,
            // require: true ,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 3
        },
        picturePath: {
            type: String,
            default: "",
          },
        gender: {
            type:String,
        },
        age:{
            type: Number,
            min: 16,
        },
        location:{
            type: String,
        },
        barCode:{
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
            default: ""
        },
        experience: {
            type: String,
        },
        college: {
            type: String,
            require: true,
        }
        
    },
    { timestamps: true }
);

const Advocate = mongoose.model("advocate", AdvocateSchema);
export default Advocate;