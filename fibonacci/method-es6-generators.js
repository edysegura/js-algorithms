'use strict'

function* fibonacciSequence(n) {
  for (let a = 0, b = 1;;) {
    yield a
    const c = a + b
    a = b
    b = c
  }
}

function fibonacci(n) {
  for (const value of fibonacciSequence()) {
    if (n-- === 0) return value
  }
}

console.log('fibonacci(12): ', fibonacci(12))
