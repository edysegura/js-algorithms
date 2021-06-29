import { findImpostor as findImpostorReduce } from './hash-reduce.js'
import { findImpostor as findImpostorBitWise } from './bitwise-xor.js'

describe('Find Impostor', () => {

  const amongUs = [2, 2, 1, 3, 3]

  it('should find impostor with reduce implementation', () => {
    expect(findImpostorReduce(amongUs)).toBe(1)
  })

  it('should find impostor with bitwise xor', () => {
    expect(findImpostorBitWise(amongUs)).toBe(1)
  })
})
