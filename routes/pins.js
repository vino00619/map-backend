const router = require("express").Router();
const Pin = require("../models/Pin");

//create a pin

router.post("/", async (req, res)=>{
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.header("Access-Control-Allow-Origin", "*");
        res.send({message:savedPin});
        res.status(200).json(savedPin)
    } catch(err){
        res.status(500).json(err)
    }
});

// get all pins

router.get("/", async (req, res)=>{
    try{
        console.log(req);
        const pins = await Pin.find();
        res.header("Access-Control-Allow-Origin", "*");
        // res.send({message:pins});
        res.status(200).json(pins);
        //res.status(200).json(req);
        console.log(pins)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;