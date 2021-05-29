import { isPalindrome } from './palidrome.js'

describe('Palindrome', () => {
  it('should verify if a word is a palindrome', () => {
    // GIVEN
    const words = [
      'Civic',
      'Hannah',
      'Level',
      'Reviver',
    ]
    // THEN
    for (const word of words) {
      expect(isPalindrome(word)).toBe(true)
    }
  })

  it('should verify if a word is not a palindrome', () => {
    // GIVEN
    const words = [
      'Davi',
      'Lidy',
      'Edy'
    ]
    // THEN
    for (const word of words) {
      expect(isPalindrome(word)).toBe(false)
    }
  })
})
