import { fibonacciLoop, fibonacciGenerator, fibonacciRecursion } from './fibonacci.js'

describe('Fibonacci', () => {
  it('should calculate fibonacci using ES6 generator', () => {
    expect(fibonacciGenerator(0)).toBe(0)
    expect(fibonacciGenerator(1)).toBe(1)
    expect(fibonacciGenerator(2)).toBe(1)
    expect(fibonacciGenerator(3)).toBe(2)
    expect(fibonacciGenerator(4)).toBe(3)
  })

  it('should calculate fibonacci using for loop', () => {
    expect(fibonacciLoop(0)).toBe(0)
    expect(fibonacciLoop(1)).toBe(1)
    expect(fibonacciLoop(2)).toBe(1)
    expect(fibonacciLoop(3)).toBe(2)
    expect(fibonacciLoop(4)).toBe(3)
    expect(fibonacciLoop(5)).toBe(5)
    expect(fibonacciLoop(6)).toBe(8)
    expect(fibonacciLoop(7)).toBe(13)
    expect(fibonacciLoop(8)).toBe(21)
  })

  it('should calculate fibonacci using recursion', () => {
    expect(fibonacciRecursion(0)).toBe(0)
    expect(fibonacciRecursion(1)).toBe(1)
    expect(fibonacciRecursion(2)).toBe(1)
    expect(fibonacciRecursion(3)).toBe(2)
    expect(fibonacciRecursion(4)).toBe(3)
    expect(fibonacciRecursion(5)).toBe(5)
    expect(fibonacciRecursion(6)).toBe(8)
    expect(fibonacciRecursion(7)).toBe(13)
    expect(fibonacciRecursion(8)).toBe(21)
  })
})
