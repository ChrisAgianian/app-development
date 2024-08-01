//import assert. Assert is used to compare two Boolean values
const assert = require('assert')
//import the student schema
const Student = require('../src/students')

//describe function to push testig through Mocha. The 'it' is gonna push the data in the 
//list and show which data is listed and ready to be executed
describe('Create the first data', function(){
    it('Save the student', function(){
        //create a new student
        const student1 = new Student({name:"Peter"})

        //read and save the student in the database. Mongo will save the new student in the database
        student1.save()

        //check if the student is not using the .then method.
        //if the student is new, the promise reaches the 'fulfilled' state and will proceed to create the scehma for the new student.
        //otherwise the promise reaches the 'rejected' state and will procees to reject the line 'student1.save().
        //this is all async.
        .then(function(){
            assert(!student1.isNew)
        })
    })
})





















