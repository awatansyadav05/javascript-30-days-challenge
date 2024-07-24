// Activity 5: Graceful Error Handling in Fetch
//task 8
// Example invalid URL
const invalidUrl = 'https://invalid-url.example.com/data';

// Function to fetch data from the invalid URL
function fetchData() {
  fetch(invalidUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Log the data if the fetch is successful
    })
    .catch(error => {
      console.error(`Error fetching data: ${error.message}`); // Log the error message
    });
}

// Call the function to fetch data
fetchData();



//task 9
// Example invalid URL


// Async function to fetch data and handle errors
async function fetchData() {
  try {
    const response = await fetch(invalidUrl);
    
    // Check if the response status is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Attempt to parse the JSON data
    console.log(data); // Log the data if fetch is successful
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`); // Log the error message
  }
}

// Call the async function to fetch data
fetchData();
