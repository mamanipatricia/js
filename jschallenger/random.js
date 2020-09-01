//1.
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting array
// Tipp: although usually not relevant, mind the order of the properties in the test case outputs

function myFunction(obj) {
  let result = {};
  const res = Object.entries(obj);
  for (const [key, value] of res) {
    result = { [value]: key, ...result };
  }
  return result;
}

// 2

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(array, number) {
  return array.filter((i) => number !== i);
}

// 3

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
//

function myFunction(array) {
  return (array = array.sort((a, b) => parseInt(b) - parseInt(a)));
}

//4
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
//

function myFunction(array) {
  return (array = array.sort((a, b) => parseInt(b) - parseInt(a)));
}

// 

// Write a function that takes as argument an object with the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise

myFunction({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:45:00')})  Expected true

// day 3
// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string
//
function myFunction(str, sentence) {
  let count = 0;
 return sentence.toLowerCase().split('').filter((item) => item === str).length;
}
myFunction('h', 'How many times does the character occur in this sentence?')


// 



// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// first way
function myFunction(obj) {
  let data = {};
   
  Object.keys(obj).map((i) => {
    if (obj[i] === '' || obj[i] === ' '){
      data = {...data, [i]: null};
    } else {
        data = {...data, [i]: obj[i]};
    } 
  });
return data;

}
// second way
function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}


// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

// first way
function myFunction(number) {

  return number.toString().includes('.') ? false : true;
  }

// second way
function myFunction(input) {
  return input - Math.floor(input) === 0

  // 

  // Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(obj1, {planet, country: city, state}) {
  data = {...obj1, planet, state, city};
return data;
}

// second way
function myFunction(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}
