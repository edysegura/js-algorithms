'use strict'

function shuffle(list) {
  const [ ...shuffledList ] = list
  let counter = shuffledList.length
  let temp, index

  while (counter > 0) {
    index = Math.floor(Math.random() * counter)
    counter--
    temp = shuffledList[ counter ]
    shuffledList[ counter ] = shuffledList[ index ]
    shuffledList[ index ] = temp
  }

  return shuffledList
}

const numberList = [1, 2, 3, 4, 5, 6]
const nameList = ['Edy', 'Lidy', 'Davi']

console.log(numberList, shuffle(numberList))
console.log(nameList, shuffle(nameList))
