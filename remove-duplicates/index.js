/*
  Remove duplicated occurrences
  input: [1,2,1,3,3,5,4,1]
  output: [1,2,3,5,4]
*/

export function removeDuplicated(list) {
  return [...new Set(input)]
}

const input = [1,2,1,3,3,5,4,1]
console.log(removeDuplicated(input)) // [ 1, 2, 3, 5, 4 ]