require("dotenv").config();
require("./app-config/utils/db-connection.util")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7475
const userAuthController = require("./src/modules/userAuth/userAuth.controller")

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
});

app.post("/userTest",userAuthController.userTest);