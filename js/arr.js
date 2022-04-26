'use strict'

//1

// const arr = [1,2,3,4,5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log(result);


//2

const arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2)
}
console.log(sum);