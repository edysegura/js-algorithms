'use strict'

function shuffle(list) {
  let counter = list.length
  let temp, randomIndex

  while (counter > 0) {
    randomIndex = Math.floor(Math.random() * counter)
    counter--
    temp = list[ counter ]
    list[ counter ] = list[ randomIndex ]
    list[ randomIndex ] = temp
  }

  return list
}

const numberList = [ 1, 2, 3, 4, 5 ]
const nameList = [ 'Davi', 'Edy', 'Lidy', 'Sophia' ]

console.log(numberList, shuffle([ ...numberList ]))
console.log(nameList, shuffle([ ...nameList ]))
