function* fibonacciSequence() {
  for (let a = 0, b = 1;;) {
    yield a
    const c = a + b
    a = b
    b = c
  }
}

export function fibonacciGenerator(number) {
  for (const value of fibonacciSequence()) {
    if (number-- === 0) return value
  }
}

export function fibonacciLoop(number) {
  let a = 0, b = 1, value
  for (let i = number; i >= 0; i--) {
    value = a
    a = a + b
    b = value
  }
  return value
}

// console.log('fibonacci(12): ', fibonacci(12))
