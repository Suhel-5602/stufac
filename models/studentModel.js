const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    phone:String,
    sem: Number,
    branch: String,

});

module.exports = mongoose.model("Student", studentSchema);