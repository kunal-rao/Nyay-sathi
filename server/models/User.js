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
        username:{
           type: String,
           unique: true,
           require: true,
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
       type:{
           type: String,
           Enumerator: ["Client", "Advocate"],
           default: "Client",
       },
        
    },
    { timestamps: true }
);

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
        username:{
           type: String,
           unique: true,
           require: true,
        },
        email: {
            type: String,
            // require: true ,
            unique: true,
        },
        type: {
            type: String,
            default: "Advocate"
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
            require: true,
        },
        enrollmentNo:{
            type: String,
            require: true,
        },
        description:  {
            type: String,
            require: true,
            default: ""
        },
        rating:{
            type: Number,
            default: 0,
        },
        experience: {
            type: String,
        },
        portfolioLink: {
            type: String,
            require: true,
        },
        advocate_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        
    },
    { timestamps: true }
);

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
        username:{
           type: String,
           unique: true,
           require: true,
        },
        email: {
            type: String,
            // require: true ,
            unique: true,
        },
        type: {
            type: String,
            default: "Client"
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
        client_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        
    },
    { timestamps: true }
);

const Advocate = mongoose.model("Advocate", AdvocateSchema);
const Client = mongoose.model("Client", ClientSchema);
const User = mongoose.model("User", UserSchema);

export { User, Advocate, Client}; 