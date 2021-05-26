import { process } from './index.js'

describe('Candies', () => {
  it('should calculate candies', () => {
    // GIVEN
    const extraCandies = 3
    const childrenCandies = [2, 3, 5, 1, 4]

    // THEN
    expect(process(childrenCandies, extraCandies)).toEqual([ true, true, true, false, true ])
  })
})
