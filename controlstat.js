//if-else
let num1=16
let num2=114
if(num1>num2)
{
    console.log(num1,"is greater");
    console.info("Bye")
}
else
{
    console.log(num2,"is greater");
    console.log(num2)
}
if (new Date().getHours() < 18) 
{
  console.log("Good day!");
}
//switch statement
//Mon-7am, Tue-Thu-4 am, Fri-9am, Sat-Sun-8 am
let day= "Friday"
switch(day)
{
    case 'Monday':
        console.log("7AM");
        break;
    case 'Tuesday':
        console.log("4AM");
        break;
    case 'Wednesday':
        console.log("4AM");
        break;
    case 'Thursday':
        console.log("4AM");
        break;
    case 'Friday':
        console.log("9AM");
        break;
    case 'Saturday':
        console.log("8AM");
        break;
    case 'Sunday':
        console.log("8AM");
        break;
    default:
        console.log("Sleep again")
}
