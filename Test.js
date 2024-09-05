console.log("Welcome to JS world!!!!")
console.log(2+2)
//variables
num = 2+2
console.log(num+9)
let num1= 20
let user="Archana"
console.log("My name is",user)
user="Sakpal"
console.log("My name is",user)
//global scope
{ 
    var x=20
    //console.log(x)
}
console.log(x)
let r=12
const PI=3.14
area= PI*r*r
console.log(area)
//datatypes
let y = 5;
let z = 6;
console.log(y == z)       // Returns true
console.log(y != z)       // Returns false
const cars = ["Saab","Volvo","BMW"];
console.log(cars[0])
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");
//functions
function addnumbers(a,b)
{
    return a+b;
}
//calling function
console.log(addnumbers(23+78));