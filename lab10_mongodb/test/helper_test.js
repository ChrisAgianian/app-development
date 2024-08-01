// import mongoose
const mongoose = require('mongoose')

//connect to MongoDB where 'students_list is the name of the database
mongoose.connect("mongodb://0.0.0.0:27017/students_list")

//check if it is connected
mongoose.connection
//use .once to watch for mongoDB to connect the first time when the event occurred
.once('open',function(){
    console.log('\n----Connected to MongoDB----\n')
})
//use the .on to watch for errors in the connection
.on('error', function(e){
    console.log('Error connecting'), e
})

//clear all collections from the 'students' document
beforeEeach(function(done){
    mongoose.connection.collections.students.drop()
    done()
})
















