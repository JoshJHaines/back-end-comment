//pulling in express framework
const express = require("express");
//pulling in morgan as a logger
const logger = require("morgan");

//calling express into the app
const app = express();

//identifying the path to router
const userRouter = require("./routes/user/userRouter");

//telling the app to use the logger
app.use(logger("dev"));

//telling the app to use express
app.use(express.json());
//parsing form data/incoming data
app.use(express.urlencoded({ extended: false }));
//telling the app to use the router
app.use("/api/user", userRouter);

//exporting app
module.exports = app;
