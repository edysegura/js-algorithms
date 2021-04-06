import { LinkedList, Node } from './LinkedList.js'

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

  it('should create a new node', () => {
    // GIVEN
    const node = new Node('Davi')
    // THEN
    expect(node.element).toBe('Davi')
    expect(node.next).toBe(null)
  })

})
