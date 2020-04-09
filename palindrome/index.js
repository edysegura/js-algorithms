'use strict'

const words = [
  'Civic',
  'Hannah',
  'Level',
  'Edy',
  'Reviver'
]

function isPalindrome(word) {
  const invertedWord = word.toLowerCase()
    .split('')
    .reverse()
    .join('')
  return invertedWord === word.toLowerCase()
}

for (const word of words) {
  !isPalindrome(word)
    && console.log(`The word ${word} isn't a palindrome`)
}
