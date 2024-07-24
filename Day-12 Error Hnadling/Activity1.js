//Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
//task 1
function throwerror() {
  throw new Error("This is the intenational error ")
}
try {
  throwerror();
} catch (error) {
  console.log("An error occured", error.message);
}

//task 2
function divideNumber(num,dem){
  if(dem===0){
    throw new Error ("Division by zero is not allowed")
  }
  return num/dem
}
try{
  let res= divideNumber(20,5);
  console.log(res);
}
catch (error) {
  console.log("An error occured",error.message);
}