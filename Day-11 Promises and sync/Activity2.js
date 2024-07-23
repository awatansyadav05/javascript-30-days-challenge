//Activity 2: Chaining Promises
//task 3
function fetchdata1(){
  return new Promise((res,rej)=> {
    setTimeout(()=>{
      console.log("Fetching data from server 1...");
      res("Data from server 1")
    },2000);
  })
}

function fetchdata2(){
  return new Promise((res,rej)=> {
    setTimeout(()=>{
      console.log("Fetching data from server 2...");
      res("Data from server 2")
    },2000);
  })
}

fetchdata1()
.then(data1=>{
  console.log(data1);
  return fetchdata2();
})
.catch(error=>{
  console.log("Error",error);
})
