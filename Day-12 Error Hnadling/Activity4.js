// Activity 4: Error Handling in Promises
//task 6
function randomPromise (){
  return new Promise((resolve, reject)=> {
    const shouldResolve =Math.random()>0.5;
    setTimeout(()=>{
      if(shouldResolve){
        resolve('Promise resolved successfully!')
      }
      else{
        reject (new Error('Promise rejected'))
      }
    },1000)
  })

}

randomPromise()
.then((message)=> {
  console.log(message);
})
.catch( (error)=> {
  console.error(`Error: ${error.message}`)
})

async function handleRandomPromise() {
  try{
    const message =await randomPromise ();
    console.log(message);
  }
  catch (error) {
    console.log(`error caught: ${error.message}`);
  }

}
handleRandomPromise()