//Activity 3: Using Async/Await
//task 4;
async function logResolvedValue() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the resolved message after 2 seconds.");
    }, 2000);
  });

  try {
    const resolvedValue = await myPromise;
    console.log(resolvedValue);
  } catch (error) {
    console.error("Error:", error);
  }
}

logResolvedValue();




async function handleRejectedPromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("This is the error message after 2 seconds.");
    }, 2000);
  });

  try {
    const resolvedValue = await myPromise;
    console.log(resolvedValue);
  } catch (error) {
    console.error("Error:", error);
  }
}

handleRejectedPromise();
