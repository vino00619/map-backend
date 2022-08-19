const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
        },
        title:{
            type:String,
            require:true,
            min:3,
        },
        desc:{
            type:String,
            require:true,
            min:3,
        },
        rating:{
            type:String,
            require:true,
            min:0,
            max:5,
        },
        lat:{
            type:String,
            require:true,
        },
        long:{
            type:String,
            require:true,
        },
    },
    { timestamps:true }
);

module.exports = mongoose.model("Pin", PinSchema)