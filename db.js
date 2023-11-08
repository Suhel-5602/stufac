const { response } = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://suhelkhan062002:Suhelsuhel1@suhel.mhxwkhi.mongodb.net/?retryWrites=true&w=majority", {
    useunifiedTopology:true,
    useNewUrlParser:true,

})
.then((response)=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.log(error);
});