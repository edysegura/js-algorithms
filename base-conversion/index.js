'use strict'

function decToBase(number, base) {
  return number.toString(base).toUpperCase()
}

console.log(decToBase(10, 2)) // 1010
console.log(decToBase(1000, 16)) // 3E8