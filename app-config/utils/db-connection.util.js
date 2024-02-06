const mongoose = require("mongoose");
const dbConfig = Object.freeze({
    DB_CONNECTION_STRING:process.env.DB_CONNECTION_STRING
})
mongoose.set('strictQuery',true);
mongoose.connect(`${dbConfig.DB_CONNECTION_STRING}`);
const dbConnection = mongoose.connection;

dbConnection.on("error",()=>{
    console.log("Error while connecting to database");
});

dbConnection.once("open",()=>{
    console.log("Database connected successfully.");
})