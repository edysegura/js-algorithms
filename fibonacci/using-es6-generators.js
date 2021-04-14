'use strict'

function* fibonacciSequence() {
  for (let a = 0, b = 1;;) {
    yield a
    const c = a + b
    a = b
    b = c
  }
}

export function fibonacci(number) {
  for (const value of fibonacciSequence()) {
    if (number-- === 0) return value
  }
}

// console.log('fibonacci(12): ', fibonacci(12))
