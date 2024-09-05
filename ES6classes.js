class person
{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, ${this.name}. your age is ${this.age}`)
    }
        
    
}
const person1 = new person("Archana",41);
person1.greet();

