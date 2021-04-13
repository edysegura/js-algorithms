import { factorial } from './factorial-with-recursion.js'

describe('Factorial', () => {
  it('should calculate a factorial from a given number', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(factorial(3)).toBe(6)
    expect(factorial(5)).toBe(120)
  })
})
