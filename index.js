const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Database connection 
mongoose.connect(process.env.mn_connection, ()=>{
        console.log("Database Connected");
});


const app = express();

// Port detail
const PORT = process.env.PORT || 3000;

// Server starter
app.listen(PORT, () => {
        console.log("Server started on port " + PORT);
});