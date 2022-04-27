let arr = ['Steven', 'Mary', 'Simone', 'Ari', 'McKay', 'James'];
let arr3 = ['Steven', 'Mary', 'Simone', 'ari', 'McKay', 'James'];

// arr.reverse();

// console.log(arr);
// Output: ['James', 'McKay', 'Ari', 'Simone', 'Mary', 'Steven']  mutates array, i.e does not return a new array

// sort() sorts the array in alphabetical order (temporarily converts to string, sorts, and

let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];

arr.sort();
arr2.sort();
arr3.sort();

console.log(arr); // output: //['Ari', 'James', 'Mary', 'McKay', 'Simone', 'Steven']
console.log(arr2); // output: [-10, -25, 0, 112, 15, 323, 43, 500]
console.log(arr3); // ['James', 'Mary', 'McKay', 'Simone', 'Steven', 'ari']

// case of first letter in string will affect sort order
// sort will not work correctly on numbers, either. sorts them as if they were words, i.e evaluates first character, then second character in case of a 'tie', and so on

let compareNum = function (a, b) {
  // to sort in ascending order
  // if (a < b) {
  //   return -1;
  // } else if (b < a) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  return a < b ? -1 : a > b ? 1 : 0;
};

// console.log(arr2.sort(compareNum)); //[-25, -10, 0, 15, 43, 112, 323, 500]

let compareNumRev = function (a, b) {
  // to sort in ascending order
  // if (a < b) {
  //   return 1;
  // } else if (b < a) {
  //   return -1;
  // } else {
  //   return 0;
  // }
  return a < b ? 1 : a > b ? -1 : 0;
};

console.log(arr2.sort(compareNumRev)); //[500, 323, 112, 43, 15, 0, -10, -25];

// let arr3 = ['Steven', 'Mary', 'Simone', 'ari', 'McKay', 'James']; moved from above for easier readability

let compareString = function (a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

console.log(arr3.sort(compareString)); //['ari', 'James', 'Mary', 'McKay', 'Simone', 'Steven']

//function could also be passed as ananymous function into sort
