// Activity 3: Grouping and Capturing
//task 5
const text = "My phone number is (123) 456-7890";
const textRegax = /\((\d{3})\)\s(\d{3})-(\d{4})/
const match = text.match(textRegax);

if(match){
  const areaCode = match[1];
  const CentralOfficeCode = match[2];
  const lineNumber = [3];
  console.log("Area code", areaCode);
  console.log("Central Office code", CentralOfficeCode);
  console.log("Line number", lineNumber);
}
else{
  console.log("no phone number found");
}

//task 6
const email = "theavii088@gmail.com";
const emailRegax = /([^@]+)@([\w\.]+)/;
const match1= email.match(emailRegax);
if(match1){
  const domain = match1[2];
  const username = match1[1];
  console.log("Domain is",domain);
  console.log("Username is ", username);
}
else{
  console.log("Not found");
}