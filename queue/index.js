import { Queue } from './queue.js'

const queue = new Queue()
console.log('Is queue empty?', queue.isEmpty())

console.log('Filling queue...')
queue.enqueue('Edy')
queue.enqueue('Lidy')
queue.enqueue('Davi')
console.log(queue.toString())