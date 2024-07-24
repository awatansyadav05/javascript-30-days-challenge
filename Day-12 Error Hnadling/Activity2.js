// Activity 2: Finally Block
//task 3
try{
  console.log("Inside try block");
  let x=y;
}
catch (error) {
  console.log("Inside catch block");
  console.error("Error",error.message);
}
finally{
  console.log("Inside an final block");
}