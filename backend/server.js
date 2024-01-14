const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const User = require('./models/userModel')

mongoose.connect(process.env.URI)
.then(() => {
    console.log('connected successfully');
    app.listen(process.env.PORT || 8000, (err) => {
        console.log('running successfully at', process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", error);
}) 

app.get('/', (req,res) => {
    res.send("api running")
})
