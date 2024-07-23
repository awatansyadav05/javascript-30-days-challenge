// Activity 5: Concurrent Promises
//task 

function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 1');
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 2');
    }, 3000);
  });
}

function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 3');
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    const results = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
    console.log('All data:', results);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAllData();


function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 1');
    }, 3000); // Resolves after 3 seconds
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 2');
    }, 1000); // Resolves after 1 second
  });
}

function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 3');
    }, 2000); // Resolves after 2 seconds
  });
}

async function fetchFirstData() {
  try {
    const result = await Promise.race([fetchData1(), fetchData2(), fetchData3()]);
    console.log('First resolved data:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchFirstData();
