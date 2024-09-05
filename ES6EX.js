//ES6 Scoping
let gloabalvar=78
if(true)
{
    let localvar=77
    console.log(gloabalvar)
    console.log(localvar)
}
console.log(gloabalvar)
//console.log(localvar)
//constants
const a=78
//a=90 //error
const num=[89,23,45]
num[1]=12
console.log(num)
let person={name:'Bob',age:89}
person.name="Han"
console.log(person)
//template literal
const name="Archana"
const age=67
const msg=`My name is ${name} and I am ${age} years old`
console.log(msg)
// Arrow functions
function add(a,b)
{
    return a+b;
}

const addrow=(a,b)=>a+b;
console.log(addrow(78,23))
console.log(add(718,23))
// const addsquare=(a,b)=>
// {
//     return a+b;
//     return a*b;
// } //cannot have multiple return
//sum1,square1=addsquare(89,99) //destructuring syntax is incorrect
//console.log(sum1,square1)
const addsquare = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return [sum, product];  // Returning an array with sum and product
};

// Destructuring the returned array into sum1 and square1
const [sum1, square1] = addsquare(89, 99);

console.log(sum1, square1);  // Outputs: 188 8811
const person1 = {
    name1: 'John',
    age1: 30,
    city: 'New York'
};

const {name1, age1, city} = person1;

console.log(name1);  // Outputs: 'John'
console.log(age1);   // Outputs: 30
console.log(city);  // Outputs: 'New York'

const fruits = ['apple', 'banana', 'cherry'];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // Outputs: 'apple'
console.log(secondFruit); // Outputs: 'banana'
console.log(thirdFruit);  // Outputs: 'cherry'
const n1=[2,3,4]
const ans=n1.map(x=>x*10)
console.log(ans)
//filter function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test=num=>num%2!==0
const isodd=numbers.filter(test)
console.log(isodd)
const isevn=numbers.filter(num=>num % 2==0)
console.log(isevn)
//spread operator
const a1=[2,4,5,6,7,8]
const final=[...a1,81,22]
console.log(final)
const person2 = { name7: 'Alice', age: 25, city: 'Wonderland' };
const{name7, ...rest}=person2
console.log(name7,rest)
//rest parameters
function addition(...numbers)
{
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(addition(1,2,3))
console.log(addition(1,2,3,6,7,8))
