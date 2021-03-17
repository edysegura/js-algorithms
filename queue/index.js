import { Queue } from './queue.js'

const queue = new Queue()
console.log('Is queue empty?', queue.isEmpty())

console.log('Enqueue...')
queue.enqueue('Edy')
queue.enqueue('Lidy')
queue.enqueue('Davi')

console.log('Is queue empty?', queue.isEmpty())
console.log('Size:', queue.size())
console.log('String: ', queue.toString())
console.log('Peek: ', queue.peek())

console.log('Dequeue...')
queue.dequeue()
queue.dequeue()

console.log('Is queue empty?', queue.isEmpty())
console.log('Size:', queue.size())
console.log('String: ', queue.toString())
console.log('Peek: ', queue.peek())