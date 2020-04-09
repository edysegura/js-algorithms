'use strict'

const words = [
  'Civic',
  'Hannah',
  'Level',
  'Edy',
  'Reviver'
]

function isPalindrome(word) {
  const wordLC = word.toLowerCase()
  const invertedWord = wordLC
    .split('')
    .reverse()
    .join('')
  return invertedWord === wordLC
}

for (const word of words) {
  !isPalindrome(word)
    && console.log(`The word ${word} isn't a palindrome`)
}
