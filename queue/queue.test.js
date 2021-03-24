import { Queue } from './queue.js'

describe('Queue', () => {
  it('should return true for an empty queue', () => {
    // GIVEN
    const queue = new Queue()
    // THEN
    expect(queue.isEmpty()).toBe(true)
  })

  it('should return false for an non empty queue', () => {
    // GIVEN
    const queue = new Queue()
    queue.enqueue('Davi')
    // THEN
    expect(queue.isEmpty()).toBe(false)
  })

  it('should return size zero for an empty queue', () => {
    // GIVEN
    const queue = new Queue()

    // THEN
    expect(queue.size()).toBe(0)
  })

  it('should return the correct size for a given queue', () => {
    // GIVEN
    const queue = new Queue()
    queue.enqueue('Edy')
    queue.enqueue('Lidy')
    queue.enqueue('Davi')

    // THEN
    expect(queue.size()).toBe(3)
  })

})
