let arr = [
  {
    firstName: 'Matt',
    lastName: 'Woodard',
    score: 99,
  },
  {
    firstName: 'Sandra',
    lastName: 'Scheff',
    score: 98,
  },
  {
    firstName: 'Liam',
    lastName: 'Woodard',
    score: 86,
  },
  {
    firstName: 'Connor',
    lastName: 'Woodard',
    score: 84,
  },
];

arr.sort(function (a, b) {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return 0;
});
console.log(arr);

//output:
// 0: {firstName: 'Connor', lastName: 'Woodard', score: 84}
// 1: {firstName: 'Liam', lastName: 'Woodard', score: 86}
// 2: {firstName: 'Sandra', lastName: 'Scheff', score: 98}
// 3: {firstName: 'Matt', lastName: 'Woodard', score: 99}

// arr.sort(function (a, b) {
//   if (a.firstName < b.firstName) return -1;
//   if (a.firstName > b.firstName) return 1;
//   return 0;
// });
// console.log(arr);

// 0: {firstName: 'Connor', lastName: 'Woodard', score: 84}
// 1: {firstName: 'Liam', lastName: 'Woodard', score: 86}
// 2: {firstName: 'Matt', lastName: 'Woodard', score: 99}
// 3: {firstName: 'Sandra', lastName: 'Scheff', score: 98}
