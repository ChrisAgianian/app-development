//import mongoose
const mongoose = require('mongoose')
//import the schema object from mongoose
const Schema = mongoose.Schema

//schema is a blueprint that outlines how data is organized and stored
//configure the schema

const StudentSchema = new Schema({name: String})

//create the model schema for each student
const Student = mongoose.model('student', StudentSchema)

//export the schema model
module.exports = Student














