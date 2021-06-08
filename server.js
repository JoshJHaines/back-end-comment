require("dotenv").config();
//pulling in mongoose to use mongo db
const mongoose = require("mongoose");
//pulling in everything from app.js
const app = require("./app");
//identifying the port
const port = 3000;

//starting the Mongo DB
mongoose
  //connects to Mongo
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //check the port if connecting
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected on ${port}`);
      console.log("MongoDB Connected");
    });
  })
  //tell you if connected or not
  .catch((e) => {
    console.log(e);
  });
