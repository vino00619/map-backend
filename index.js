require("./config")
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")
const app = express();
const cors = require('cors');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next(); 
})
app.use(cors());
console.log("cors updated");
// const corsOptions ={
//   origin:'https://travel-stories-app.netlify.app/', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

dotenv.config();

app.use(express.json());

// mongoose.connect(`mongodb+srv://${process.env.MONGO_URL}:vino@cluster0.yls3a.mongodb.net/?retryWrites=true&w=majority`)
// process.env.MONGO_URL
mongoose.connect(`mongodb+srv://${process.env.MONGO_URL}:vino@cluster0.yls3a.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("mongoDB connected")
})
.catch((err)=>console.log(err));
// ...



app.get("/", (req, res) => {
    res.send("Backend for map-bakcend running");
  });
app.use("api/users", userRoute);
app.use("api/pins", pinRoute);


app.listen(process.env.PORT || 8800, () => {
    console.log("server is running");
})