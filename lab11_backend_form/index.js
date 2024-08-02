//import the libraries,dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//create an app using express
const app = express()

//use the body-parse middleware to handle data sent in the body of HTTP
app.use(bodyParser.json())

//use express to serve static files. Any files in the public folder will be accessible from the root URL of the web server
app.use(express.static('public'))

//use express body parser for parsing URL-encoded request bodies (typically from HTML forms)
app.use(bodyParser.urlencoded({extended: true}))

//connect to database using mongoose
//the useNewURL parser and useUnifiedTopology option are to make sure that uses the new parser and new server and monitoring engine
mongoose.connect('mongodb://0.0.0.0/userlogin', {useNewUrlParser: true, useUnifiedTopology: true})

//check connection
mongoose.connection
.once('open', function(){console.log('Connected to DB')})
.on('error', function(e){console.log('Error Connecting...', e)})

//create the checking page
app.get('/', function(request, response){
    response.redirect('index.html')
}).listen(3000)

//posting the form
app.post('/login', async (request, response) =>{
    try{
        //get the data from index.html form
        const username = request.body.username
        const password = parseInt(request.body.password) //password is cast as integer
        //testing
        // console.log(`entered ${username} and ${password}`)

        //get the data from DB an check if it matches the information we input
        const user = await mongoose.connection.db.collection('users').findOne({username:username})

            if(!user){
                console.log('information does not match')
            }
            else if(user.password ===password){
                console.log('Successful login')
            }
            else{
                console.log('Password dont match')
            }

    }catch(error){
        console.log('error....')
    }
})













