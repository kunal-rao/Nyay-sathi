import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
       roll:{
           type: String,
           Enumerator: ["Client", "Advocate"],
           default: "Client",
       },
        
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;