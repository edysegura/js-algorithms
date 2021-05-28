import { removeDuplicated } from './index.js'

describe('Duplicated Occurrences', () => {
  it('should remove the duplicated occurrences', () => {
    // GIVEN
    const input = [1, 2, 1, 3, 3, 5, 4, 1]
    const output = [1, 2, 3, 5, 4]
    // THEN
    expect(removeDuplicated(input)).toEqual(output)
  })
})
