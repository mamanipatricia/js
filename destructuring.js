// example 1
const info = {
  title: "Once Upon a Time",
  protagonist: {
    name: "Emma Swan",
    enemies: [
      { name: "Regina Mills", title: "Evil Queen" },
      { name: "Cora Mills", title: "Queen of Hearts" },
      { name: "Peter Pan", title: `The boy who wouldn't grow up` },
      { name: "Zelena", title: "The Wicked Witch" },
    ],
  },
};

let {
  title,
  protagonist: {
    name,
    enemies: [, , , { name: enemyName, title: enemytitle }],
  },
} = info;

// example 2
// find max number of an array
const array = [5, 6, 8, 4, 9]
// 1ra forma
Math.max.apply(0, array.map(item => parseInt(item, 16)))
// 2da forma
Math.max(...array.map(item => parseInt(item, 16)))

// example 3
// concat two arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// first way
let res = [...array1, ...array2]
// second way
let res2 = array1.concat(array2)



// 15 Must-Know JavaScript Array Methods

// The some() tests whether at least one element in the array passes the test implemented by the callback function. The callback function will receive 3 arguments, the item, the index, and the full array. Additionally, is possible to assign a value for this when executing the callback by using the argument thisArg.

const array1 = [1, 2, 3]
array1.some(item => item==98)

// The every() method is in a way similar to the some() method, but it tests whether all the elements in the array pass the test implemented by the callback function.
const array1 = [1, 2, 3]
array1.every(item => item >= 3)

// reducer

// The map() method creates a new array populated with the results of the callback function for each element in the array. Similar to the other methods, the callback function will receive 3 arguments, currentValue, index, and array. As is with the case of reduce(), the callback is only invoked for indexes of the array which have assigned values (including undefined).

const array1 = [1, 2, 3]
array1.map(value => value * 3)

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By default, it will flatten 1 level.

const arr1 = [1, 2, [3, 4]]
console.log(arr1.flat())

const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2))

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr4.flat(Infinity))

// filter() Together with map() I think it’s one of my favorites. The filter() method creates a new array with all the elements that pass the test implemented by the callback function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

// forEach() The forEach() method executes a provided function once for each array element.

const array1 = [1, 2, 3]
array1.forEach(item => console.log(item))

// NOTE
// There are 2 important considerations when using forEach()

/*There is no way to stop or break a forEach() loop other than throwing an exception.
forEach() expects a synchronous callback, it won’t wait for promises to be resolved.*/

// *********************************

// findIndex() The findIndex() method returns the index of the first element in the array that satisfies the provided callback function. Otherwise, it returns -1, indicating that no element passed the test. Unlike with other methods, findIndex() will execute the callback function even for indexes with unassigned values.

[1, 2, 3, 4, 5, 6].findIndex(item => item%2==0)

// find() The find() method is similar to the findIndex() method, however, it returns the value of the first element which satisfies the provided callback function as supposed to its index. If no element satisfies the callback then undefined is returned.

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ]

  inventory.find(({name}) => name === 'bananas')

//   {name: "bananas", quantity: 0}

// sort() The sort() function is very common and simply allows us to sort the elements of an array in place and returning the sorting array. The default sort order is ascending. The complexity and performance of this method cannot be guaranteed as it depends on the implementation.

const numbers1 = [4, 2, 5, 1, 3, 11]
numbers1.sort((a, b) => a - b) // asc
numbers1.sort((a, b) => b - a) // des

// concat() The concat() method is used to merge two or more arrays into a new array.

const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]

letters.concat(numbers)
numbers.concat(letters)
letters.concat(letters)
numbers.concat(numbers)

// fill() The fill() method changes all the elements in an array to a static value, from a start index (default 0) to an end index (default array.length). The updates will happen in place and will return a reference to the same array.


// hw
// dado el siguiente array
// retornar un array de names
[{id: 1, name: "Peter Par"}, {id: 2, name: "Julia"}, null, {id: 4, name: "Rogelio"}]



