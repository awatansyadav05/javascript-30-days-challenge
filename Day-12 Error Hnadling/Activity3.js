//Activity 3: Custom Error Objects
//task 4
class CustomError extends Error{
  constructor(message){
    super(message);
    this.name='CustomError'
  }
}
function riskyoperation(){
  const isError= true;
  if(isError){
    throw new CustomError('Someting went wrong')
  }
  console.log('operation succedd');
}

try{
riskyoperation()
}
catch (error) {
if(error instanceof CustomError){
  console.log(`custom error caught: ${error.message}`);
}
else{
  console.log(`unexpected error: ${error.message}`);
}
}

//task 5
class validationError extends Error {
  constructor (message){
    super(message)
    this.name='validationError'
  }
}

function validateInput(input){
  if(typeof input!=='string'|| input.trim()===''){
    throw new validationError ('Input must be an non-empty message')
  } 
  console.log('Input is valid');
}

try{
  const userinput='';
  validateInput(userinput);

}
catch (error) {
  if(error instanceof validationError){
    console.error(`validation error.${error.message}`);
  }else{
    console.log(`unexpected error,${error.message}`);
  }
}