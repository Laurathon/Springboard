//function filterOutOdds() {
// var nums = Array.prototype.slice.call(arguments);
//  return nums.filter(function(num) {
//    return num % 2 === 0
//  });
//}
nums = [3, 6, 4, 8, 1, 9, 4];

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

obj1 = { a: 1, b: 2 };
obj2 = { c: 3, d: 4 };
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//double and Return Args

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]//cons
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((value) => value * 2),
];

//Slice and Dice

///** remove a random element in the items array
//and return a new array without that item. */

items = [3, 4, 6, 8, 22, 45, 1];

const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  console.log(index);
  return [...items.slice(0, index), ...items.slice(index + 1)];
  //return [...items.slice(index + 1)];
};

///** Return a new array with every item in array1 and array2. */

//function extend(array1, array2) {}

array1 = [3, 4, 6];
array2 = ["a", "b", "c"];

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {
  let obj1 = { ...obj };
  obj1[key] = val;
  return obj1;
};

///** Return a new object with a key removed. */

//function removeKey(obj, key) {}

const removeKey = (obj, key) => {
  let obj1 = { ...obj };
  delete obj1[key];
  return obj1;
};

/** Combine two objects and return a new object. */

//function combine(obj1, obj2) {}
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

//function update(obj, key, val) {}

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
