//Jul 25, JS Objects

//create an object for student with properties of name, age, school.

let student1 = {
    name: "Peter Pan", 
    age: 23, 
    school:"QCC"
} 

//retrieve information in an object using square brackets.

console.log(student1["name"]);

//retrieve information in an object using dot notation.

console.log(student1.school);

// you cannot use the dot notation if the key, property name starts with a number i.e. -> 2name: "Peter"

//update data in an object can be done suing the dot notation or square brackets.

student1.age = 30;
student1["school"] = "NYU";

console.log(`Updated age ${student1.age}`);
console.log(`Updated school ${student1.school}`);

//Example 2: Nested Object and Array Within an Object

console.log("\n--------------example 2--------")

let user1 = {
    name: "Martha",
    age: 80,
    //an array as property
    friends:["Wendy", "Carl", "Peter"],
    //an object as property
    favorite: {
        food:"cake",
        color:"green"
    }
}

//access key inside an object
let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

//access an iten inside an array

let second_friend = user1.friends[1]
console.log(`${user1.name} second friend is ${second_friend}`)

//Example 3: ARRAY LIST AS OBJECT
//we can also create an array with object as list items

let schedule = [
    {
        day: "Monday",
        plan: "Go to Yoga class",
        time: "6:30pm"
    },
    {
        day: "Tuesday",
        plan: "Complete labs",
        time: "11pm"
    }
]

//access the plan for tuesday
console.log(`the plan for Tuesday is ${schedule[1].plan}`)

//Exaple 4: Object Methods
console.log("\n----------Example 4----------")
let item = {
    //properties
    id: 123,
    name:"pencil",
    quantity: 200,
    color:['red', 'black', 'blue'],
    //methods
    sale: function(){
        return "SALE! 50% OFF"
    },
    quantity_cart: function(){
        this.quantity -=1
        return this.quantity
    }
}

//access sale() method
console.log(`the sale message of ${item.name} is ${item.sale()}`)
console.log(`the remaining quantity of ${item.name} is ${item.quantity_cart()}`)

/*JSON JavaScript Object Notation, a popular text format used to store and exchange data.
JSON data is stored as comma separated list of key-value pairs within a JSON object
We can covert a JS object to JSON object by using the JSON.stringify()*/

//Example 5: JSON 
let fashionshow = {
    category: "fashion",
    models: [
        {
            name: "Alice",
            age: 21,
            city: "NYC"
        },
        {
            name:"Kelly",
            age: 23,
            city: "Paris"
        }
    ]
}

console.log("\n----------Example 5--------")
console.log(fashionshow)

//create a JSON version of the JS object

let json_fashionshow = JSON.stringify(fashionshow)
console.log("JSON version: ")
console.log(json_fashionshow)



















