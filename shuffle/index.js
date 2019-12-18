'use strict'

function shuffle(array) {
  let counter = array.length
  let temp, index

  while (counter > 0) {
    index = Math.floor(Math.random() * counter)
    counter--
    temp = array[ counter ]
    array[ counter ] = array[ index ]
    array[ index ] = temp
  }

  return array
}

const numberList = [1, 2, 3, 4, 5, 6]
const nameList = ['Edy', 'Lidy', 'Davi']

console.log(numberList, shuffle([ ...numberList ]))
console.log(nameList, shuffle([ ...nameList ]))
