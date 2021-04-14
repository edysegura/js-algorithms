export function factorial(number) {
  if(number <= 1) return 1
  return number * factorial(number - 1)
}

// console.log('factorial(5) =', factorial(5))
// console.log('factorial(1) =', factorial(1))
// console.log('factorial(0) =', factorial(0))