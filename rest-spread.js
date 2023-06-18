/* Write and ES2015 Version of function filterOutOdds() */

const filterOutOdds = (...args) => args.filter((value) => value % 2 === 0);

// findMin

const findMin = (...nums) => Math.min(...nums);

// mergeObjects

const mergeObjects = (obj1, obj2) => {
	return { obj1, obj2 };
};

// doubleAndRetunArgs
const doubleAndReturnArgs = (arr, ...args) => {
	return [...arr, ...args.map((value) => value * 2)];
};

// slice and dice
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	let randomItem = Math.floor(Math.random() * items.length);
	let newArr = [items.slice(0, randomItem), ...items.slice(randomItem + 1)];
	return newArr;
};

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => {
	return [...arr1, ...arr2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	let newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
