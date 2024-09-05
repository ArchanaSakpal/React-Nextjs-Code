function greet() {
    console.log("Hello, world!");
  }
  greet();

  function greet(name) 
  {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice"); // Output: Hello, Alice!
  greet("Bob"); 

  function add(a,b)
  {
    let x= a+b;
    let y=a*b;
    return [x,y]
  }

  let [w,x]=add(78,234)
  console.log("SUM=",w)
  console.log("SUM=",x)