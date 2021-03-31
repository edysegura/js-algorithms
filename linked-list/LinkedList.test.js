import { LinkedList } from './LinkedList.js'

describe('LinkedList', () => {
  it('should return true for an empty LinkedList', () => {
    // GIVEN
    const linkedList = new LinkedList()
    // THEN
    expect(linkedList.isEmpty()).toBe(true)
  })

  it('should return the right size for a given LinkedList', () => {
    // GIVEN
    const linkedList = new LinkedList()
    // THEN
    expect(linkedList.size()).toBe(0)
    // WHEN
    linkedList.push('Edy')
    // THEN
    expect(linkedList.size()).toBe(1)
  })

})
