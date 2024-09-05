let person={
    name:"Archana",
    age:40,
    isEmp:true,
    hobbies:['reading','playing','coding'],
    display() //ES6 syntax
    {
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    }
}
console.log(person)
console.log("Name",person.name)
console.log("Hobbies",person.hobbies[2])

person.display();

let fruits=['banana','mango','pear'];
console.log(fruits[1]);

fruits.push("orange","pinapple");
console.log(fruits)

fruits.pop();
console.log(fruits); 
fruits[1] = "Blueberry";
console.log(fruits); 

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
//Date type
let d=new Date(0);
console.log(d);
let now = new Date();
console.log(now.getFullYear()); // Output: 2024
console.log(now.getMonth()); // Output: 7 (August)
console.log(now.getDate());
now = new Date();
console.log(now.getFullYear()); // Output: 2024
console.log(now.getMonth()); // Output: 7 (August)
console.log(now.getDate());
let date = new Date();
date.setFullYear(2025);
date.setMonth(11); // December
console.log(date); 
//Adding 7 days to a date:
let now1=new Date()
let fdate=new Date(now1.getTime()+7*24*60*60*1000);
console.log(fdate)