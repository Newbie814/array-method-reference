// copying elements within an array (copy from one part of the arrat to another)

// copyWithin(target, start[, end])   //first argument is where we want it copied to, second indicates element to start (inclusive)copying from, third is optional, indicates element to stop copying at

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// exercise:

//Make a sorted version of the growthRate array. Make sure to clone it first, so that you can maintain the order of the original data. Sort so the lowest number comes first. Try using chaining with this exercise.

let growthRate = [1.1, 0.5, -0.1, 0.3, 1.2, 1.5, 2.1, 0.8, 1.5, 0.3, -0.4];

let sortedGrowthRate = [...growthRate].slice().sort((a, b) => a - b);
console.log(sortedGrowthRate);
console.log(growthRate);

//Make a clone of the months array, then sort it and extract all the months that start with 'J' into a subarray. Try using chaining with this exercise.

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let sortedJayMonths = [...months]
  .sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  })
  .splice(4, 3);

console.log(sortedJayMonths);
console.log(months);
