'use strict'

const words = [
  'Civic',
  'Davi',
  'Edy',
  'Hannah',
  'Level',
  'Lidy',
  'Reviver',
]

function isPalindrome(word) {
  const originalWord = word.toLowerCase()
  const invertedWord = originalWord
    .split('')
    .reverse()
    .join('')
  return invertedWord === originalWord
}

for (const word of words) {
  console.log(`${word} is a palindrome? ${isPalindrome(word)}`)
}
