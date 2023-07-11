const mongoose = require("mongoose")

const peopleSchema = mongoose.Schema({
    userName: String,
    userAge: {type: Number, require:true},
    userLocation: String
    
}) 
const peopleModel = mongoose.model("people", peopleSchema)

module.exports = peopleModel