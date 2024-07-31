// Activity 4: Assertions and Boundaries
//task 7;
const text = "Hello World! this is text ";
const textRegax = /^\b\w+\b/;
const match = text.match(textRegax)

if (match) {
  console.log("Matched", match[0]);
}
else {
  console.log("No match found");
}

//task 8
const text1= "This is the text ending with test";
const regax = /\b\w+\b$/;
const match1 = text1.match(regax);
if(match1){
  console.log("Matched at the end", match1[0]);
}
else{
  console.log("No match found");
}
