// Tasks/Activities:
// Activity 1: Understanding Promises
//Task 1
const myPromise = new Promise ((res, rej)=> {
  setTimeout(()=>{
    res("This is the resolved message after 2 sec");
  },2000)
  setTimeout(()=> {
    rej("This is rejected after 2 seconds")
  },5000)
});
myPromise
.then(message=> {
  console.log(message);
})
.catch(message=>{
  console.log(message);
})

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is rejected after 5 seconds.");
  }, 5000);
});

rejectPromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });
