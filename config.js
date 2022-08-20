const mongoose = require("mongoose");

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_URL}:vino@cluster0.yls3a.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "test"
  })
  .then(console.log("Database connected"))
  .catch(console.error);

const db = mongoose.connection;


db.on("error", error => {
  console.log("MongoDB Connection Error");
  console.error(error);
});

module.exports = db;