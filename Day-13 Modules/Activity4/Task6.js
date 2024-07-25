
const _ = require('lodash');

function main() {
  const lowerCaseString = "hello, world!";
  const capitalizedString = _.capitalize(lowerCaseString);
  console.log(capitalizedString); 
}

main();
