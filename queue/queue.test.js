import { Queue } from './queue.js'

describe('Queue', () => {
  it('should return true for an empty queue', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
  })

})