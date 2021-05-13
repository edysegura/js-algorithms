'use strict'

import { isPalindrome } from './palidrome.js'

const words = [
  'Civic',
  'Davi',
  'Edy',
  'Hannah',
  'Level',
  'Lidy',
  'Reviver',
]

for (const word of words) {
  console.log(`${word} is a palindrome? ${isPalindrome(word)}`)
}
