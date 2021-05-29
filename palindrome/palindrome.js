export function isPalindrome(word) {
  const originalWord = word.toLowerCase()
  const invertedWord = originalWord
    .split('')
    .reverse()
    .join('')
  return invertedWord === originalWord
}
