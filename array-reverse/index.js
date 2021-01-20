import { customRevert } from './custom-reversed.js';

let numbers = [1, 2, 3, 4, 5]
let reversedNumbers

console.log([...numbers].reverse())
// [5, 4, 3, 2, 1]

console.log(customRevert(numbers.slice()))
// [5, 4, 3, 2, 1]

console.log(numbers)
// [1, 2, 3, 4, 5]