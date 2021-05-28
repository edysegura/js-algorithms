/*
  Remove duplicate occurrences
  input: [1,2,1,3,3,5,4,1]
  output: [1,2,3,5,4]
*/

const input = [1,2,1,3,3,5,4,1]
console.log([...new Set(input)])
