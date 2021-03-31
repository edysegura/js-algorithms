import { LinkedList } from './LinkedList.js'

describe('LinkedList', () => {
  it('should return the right size for a given LinkedList', () => {
    // GIVEN
    const linkedList = new LinkedList()
    // THEN
    expect(linkedList.size()).toBe(0)
  })

})
