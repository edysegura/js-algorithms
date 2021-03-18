import { queueStatus } from './queue-status.js'
import { Queue } from './queue.js'

const queue = new Queue()
console.log('Is queue empty?', queue.isEmpty())

console.log('Enqueue...')
queue.enqueue('Edy')
queue.enqueue('Lidy')
queue.enqueue('Davi')

queueStatus(queue)

console.log('Dequeue...')
queue.dequeue()
queue.dequeue()

queueStatus(queue)
queue.enqueue('Sophia')
queueStatus(queue)