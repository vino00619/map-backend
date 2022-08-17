const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")
const app = express();
const cors = require('cors');

dotenv.config();

app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_URL}:vino@cluster0.yls3a.mongodb.net/?retryWrites=true"&"w=majority`).then(()=>{
    console.log("mongoDB connected")
})
.catch((err)=>console.log(err));
//.


app.use(cors())
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


app.listen(process.env.PORT || 8800, () => {
    console.log("server is running");
})