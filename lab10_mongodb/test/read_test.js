//import
const assert = require('assert')
const Student = require('../src/students')

describe('Read the data', function(){
    let student1, student2

    //async check
    beforeEach(function(done){
        student1 = new Student({name: "Peter"})
        student2 = new Student({name: "Martha"})
        student1.save()
        student2.save()
        .then(function(){
            done()
        })
    })

    it('Find all students with name Peter', async()=>{
        const students = await Student.findOne({name:"Peter"})
        console.log(students)
        console.log(students._id)
    })
})



























