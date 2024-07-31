// Activity 5: Practical Applications
//task 9
const password = "Theavi0@";
const regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/
const isValidPassword = regax.test(password)
console.log("Password valid", isValidPassword);

//task 10
const url = "www.google.com";
const urlRegax = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-\.~!$&'()*+,;=:@%]*)?$/
const isValidUrl = urlRegax.test(url);
console.log("url valid", isValidUrl);