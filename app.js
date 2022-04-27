// slice() modifies the original array
// first argument specifies the array position for insertion or deletion if just one argument, would delete from that position onwards
// second argument specifies the number of elements to be deleted
// deleted elements are returned in array
// any additional arguments are inserted at the position specified by the first argument

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnArray = arr.splice(2);

console.log(returnArray); // [3, 4, 5, 6, 7, 8, 9, 10]

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnArray2 = arr2.splice(2, 3);

console.log(returnArray2); // [3, 4, 5]

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnArray3 = arr3.splice(2, 3, 'a', 'b', 'c');

console.log(arr3); //[1, 2, 'a', 'b', 'c', 6, 7, 8, 9, 10]
console.log(returnArray3); // [3, 4, 5]

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnArray4 = arr4.splice(2, 3, ['a', 'b', 'c']);

console.log(arr4); //[1, 2, Array(3), 6, 7, 8, 9, 10]  ---- Array(3) is a nested array with a, b, and c
console.log(returnArray4); // [3, 4, 5]
