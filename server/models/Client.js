import mongoose, { Mongoose } from "mongoose";

const ClientSchema = new mongoose.Schema(
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
        },
        location:{
            type: String,
        },
        
    },
    { timestamps: true }
);

const Client = mongoose.model("client", ClientSchema);
export default Client;