//Activity 4: Fetching Data from an API
//task 6
const apiUrl = 'https://api.publicapis.org/entries';
function fetchData(){
  fetch(apiUrl)
  .then(response=>{
    if(!response.ok){
      throw new Error(`HTTP error! status:: ${response.status}`);
    }
    return response.json();
  })
  .then(data=>{
    console.log('Response Data',data);

  })
  .catch(error=>{
    console.log('Error',error);
  })
}


async function fetchData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Response Data:', data);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
