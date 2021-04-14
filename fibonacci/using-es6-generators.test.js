import { fibonacciGenerator } from './using-es6-generators.js'

describe('Fibonacci', () => {
  it('should calculate fibonacci from a given number', () => {
    expect(fibonacciGenerator(0)).toBe(0)
    expect(fibonacciGenerator(1)).toBe(1)
    expect(fibonacciGenerator(2)).toBe(1)
    expect(fibonacciGenerator(3)).toBe(2)
    expect(fibonacciGenerator(4)).toBe(3)
  })
})
