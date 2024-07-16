//Control Structures
//activity 1: If-else Statement
//task 1
let num= -9;
if(num>0)
  console.log("positive");
else if (num<0)
  console.log("negative");
else
console.log("zero");


//task 2
let age=20;
if(age>=18)
  console.log("eligible to vote");
else
console.log("not eligible to vote");


//activity 2:Nested If-else Statement
//task 3
let a=3;
let b=4;
let c=5;
if(a>b)
{
  if(a>c)
  {
    console.log(a);
  }
  else
  {
    console.log(b);
  }
}
else
{
  if(b>c)
  {
    console.log(b);
  }
  else
  {
    console.log(c);
  }
}

//activity 3: Switch Case
//task 4
let day=6;
switch (day)
{
  case 1:
  console.log("sunday");
  break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break; 
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

//Task 5;
let mark=89;
switch(true)
{
  case (mark >=90 && mark<=100):
    console.log("Grade A");
    break;
  case (mark>=80 && mark<=89):
    console.log("Grade B");
    break;
  case (mark>=70 && mark<=79):
    console.log("Grade C");
    break;
  case (mark>=60 && mark<=69):
    console.log("Grade D");
    break;
  case (mark>=0 && mark<=59):
    console.log("Grade F");
  default:
    console.log("Enter positive Mark");
    break;

}

//activity 4: Conditional Operator
//task 6
let num1 = 8;
ans=num1>=0? console.log("Even"): console.log("Odd");


//activity 5: Combining Conditions
//task 7
let year=2018;
let isLeap;
if(year%4===0 && year %100 !==0 || year%400===0)
{
  isLeap=true;
}
else
{
  isLeap=false;
}
console.log(isLeap);