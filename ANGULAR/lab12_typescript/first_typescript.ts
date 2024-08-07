//explicit type

function greeter(username:string){
    console.log(`Welcome to typescript ${username}`)
}

let user = "Chris"
greeter(user)

//implicit type
let y = 12
y = 30
console.log(y)

//explicit array (list)
let colors:string[] = ['red', 'blue', 'white']
console.log(colors)

//implicit array.
let numbers = [3, -9, 5]
console.log(numbers)
//wont let you redefine with different data type if it is already defined above as number
numbers = ['fish', 'dog', 'cat']

console.log("\n----------example 2: 'any' type---------")
//use the 'any' data type: allows all types
let a:any
a = 5
console.log("a = 5", typeof(a))
a = "Peter Pan"
console.log("a = Peter Pan", typeof(a))
a = false
console.log("a = false", typeof(a))

console.log("\n----------example 3: 'unknown' type---------")
//unknown is similar to 'any'
let b:unknown
b = 10

console.log("b = 5", typeof(b))
b = "Peter Pan"
console.log("b = Peter Pan", typeof(b))
b = true
console.log("b = true", typeof(b))

console.log("\n----------example 4: 'enum' type---------")
//'enum' is a special class that represents a group or list of constant values (values that cant be changed)
//'enum' can use numerical or string constant
enum Countries {USA, Canada, Mexico}
let USA = Countries.USA
let Canada = Countries.Canada
let Mexico = Countries.Mexico

console.log('Class object of Canada ${Canada}')

console.log("\n----------example 5: data type classes---------")
//if the data type is explicit, you can directly use the method to the specific data type
let username:string = "Ann Smith"
let characters_username =  username.length
console.log(`Username ${username} has ${characters_username} chars`)

//if it implicit data type, we must cast it to the specific data type before applying a method
let firstname = "Luisa"
//cast into string
firstname = <string>firstname
let character_firstname = firstname.length
console.log(`User ${firstname} has ${character_firstname} chars`)

console.log("\n----------example 6: return type function---------")
function get_time():number{
    return new Date().getHours()
}
console.log(`The time is ${get_time()} h`)

console.log("\n----------example 7: void function---------")
//void function does not return value
function greeting():void{
    console.log('Welcome to ANGULAR')
}
//call the function
greeting()

console.log("\n----------example 8: Function with params---------")
function get_sum(num1:number, num2:number, name:string):string{
    let result = name + ", the sum is " + (num1+num2)
    return result
}

console.log(get_sum(2, 3, "Peter"))

console.log("\n----------example 9: Optional Params---------")
//the ? operator marks a param as optional
function sum_total(n1:number, n2?:number):number{
    if(n2 !== undefined ){
        return (n1+n2)
    }
    else{
        return -1
    }
}

console.log(`The sum is ${sum_total(5, 9)}`)

console.log("\n----------example 10: Spread syntax---------")
//spread syntax is used to deconstruct an array
//split each element of number[] into n numbers
function get_average(...n:number[]):number{
    let total = 0
    let average  = 0
    let count = 0
    for(let i=0; i<numbers.length;i++){
        total+= n[i]
        count++
    }

    average = total/count
    //or do average = total/n.length
    return average
}

console.log(`The average is ${get_average(-9, 6, 2)}`)

console.log("\n----------example 11: Class---------")
class Car{
    //define data types
    brand: string
    model: string
    year_manufacture: number

    //constructor
    constructor(brand:string, model:string, year_manufacture:number){
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture
    }

    year(){
        console.log(`The car was manufactured at ${this.year_manufacture}`)
    }

}

//create a model for class Car
let usercar = new Car('Tesla', 'S', 2023)
//access data of the class through 'usercar'
console.log(`Car brand = ${usercar.brand}`) //accessing brand property
usercar.year() //accessing method 'year'

console.log("\n----------example 12: Inherent class---------")
//Inheritance is a name of the transfer generic characteristics by extending from one class to another using the keyword 'extend'
class Person{
    save(){
        console.log('Registration Successful')
    }
}

class Customer extends Person{
    sale(){
        console.log('x items were sold')
    }
}

class Employee extends Customer{
    salary(){
        console.log('Salary paid')
    }
}
//create a model for Person
let person1 = new Person
//calling the method save() of model 'person1'
console.log("Calling save() for Person1")
person1.save()

//create a model for Customer
let customer1 = new Customer
//calling the method sale() for model 'customer1'
console.log("Calling sale() for Customer1")
customer1.sale()
//calling the inherited methods 'save()' through model 'customer1'
console.log("Calling save() for Customer1")
customer1.save()

//create a model for employee
let employee1 = new Employee
//calling the inherited method 'save()' through model 'employee1'
console.log("Calling save() for Employee1")
employee1.save()

console.log("\n----------example 13: ---------")















