require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('express').Router();
const mongoose = require('mongoose');
const Form = require('./models/Form');
const PORT = process.env.PORT || 4000;
const app = express();

mongoose.connect(process.env.REACT_APP_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("DB Connected...");
});

// configure body parser for AJAX requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend/build'));


app.get("/api/getdata",(req,res) => {
    Form.find((err, data) => {
        if(err){console.log(err)}
        else res.json(data);
    })
})

app.post("/api/create", (req,res) => {
    const data = new Form(req.body);
    data.save().then((data) => {
        res.json(data);
    }).catch((err) => {res.status(500).send(err.message)})
})

// If no API routes are hit, send the React app
app.use('*', function(req, res) {
	// res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    res.sendFile(path.resolve('frontend', 'build', 'index.html'))
});

app.listen(PORT, () => {console.log("Server is running on port " + PORT);})