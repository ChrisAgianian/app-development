console.log('Welcome to Node JS by - Chris Agianian');
console.warn('Warning! The file is corrupted');
console.error('Syntax Error!');
console.trace('Trace error in line ');

console.log('----Example 2; global object, timer-----')
setTimeout(()=>{console.warn('Time is over')},3000);

// let count = 9;
// const timer = setInterval(() => {
//     console.log(`Counting ${count}`);
//     count -=1;
//     if(count ==0){
//         clearInterval(timer);
//     }
// }, 2000);

console.log('-----Example 3; check or print directory or file------');
console.log(`Current directory ${__dirname}`);
console.log(`Curent file ${__filename}`);

console.log('-----Example 4; cworking with different module------');
//import the module

const name = require('./mod');

console.log(name.helper('Peter'));
console.log(name.id(123));
console.log(name.email('peter@gmail.com'));

console.log('-----Example 5; node js event module------');
//import the nodejs module events
const events = require('events');
//use constructor "new" to create an object of events
const eventEmitter = new events.EventEmitter();

eventEmitter.on('test', function(e){
    console.log(e);
});

eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS');

console.log('-----Example 6; read files in nodejs------');

const fs = require('fs');

fs.readFile('readmore.txt', 'utf-8', function(error, data){
    console.log(data);
    console.group(`Error=${error}`);
});

console.log('-----Example 7; write files in nodejs------');

let info = "This file has three names: \n1. Peter\n2. Martha\n3. Jason"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error);
    }
});

console.log('-----Example 8; append data into an existing file in nodejs------');

fs.appendFile("user_emails.txt", info, function(error){
    if(error){
        console.log(error);
    }
});

console.log('-----Example 9; remove file in nodejs------');

fs.unlink('user_emails.txt', function(error){
    if(error){
        console.log(error);
    }
});

console.log('-----Example 10; create file in nodejs------');
// .writeFile(), .appendFile(), .open()
fs.open('newfile.txt', 'w', (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('File saved!');
    }
});

console.log('-----Example 11; create directory in nodejs------');

fs.mkdirSync('new_directory');


console.log('-----Example 12; create directory in nodejs------');

fs.rmdirSync('new_directory');





