import { fibonacci } from './using-es6-generators.js'

describe('Fibonacci', () => {
  it('should calculate fibonacci from a given number', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
  })
})
