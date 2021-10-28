// // first way
// function pascal(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // second way
// function pascal(n) {
//   return (n * (n + 1)) / 2;
// }

// // third way
// function pascal(n) {
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr.reduce((a, b) => a + b);
// }

// console.log(pascal(5));
// const arr = ['sait', 'mehmet'];

// function greet(arr) {
//   for (const person of arr) {
//     console.log(`welcome ${person}`);
//   }
// }
// let result = 'name';
// console.log('result :>> ', result);

// function divide(dividend, divider) {
//   let result = [quotient, remainder];
//   if (divider != 0) {
//     let quotient = Math.floor(dividend / divider);
//     let remainder = dividend % divider;
//   }
//   return result;
// }

// console.log(divide(10, 3));
// add(3, 4);
console.log(typeof add);

var add = function (a, b) {
  console.log(a + b);
};
