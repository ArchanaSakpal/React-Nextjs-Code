//while
console.log("Example of while")
let count=1
while(count<=10)
{
    console.log(count)
    count++
}

//do while
console.log("Example of do while")
count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);

//for loop
console.log("Example of for loop")
for(count=1; count<=5;count++)
{
    console.log(count)
}
//break and continue
// Using break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      console.log("Breaking out of the loop at i =", i);
      break; // Exits the loop when i is 5
    }
    console.log(i);
  }
  
  // Using continue
  for (let j = 1; j <= 10; j++) {
    if (j === 5) {
      console.log("Skipping the value", j);
      continue; // Skips the rest of the code in the loop for this iteration when j is 5
    }
    console.log(j);
  }
  