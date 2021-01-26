import { Stack } from './Stack.js'
import { decimalToBinary } from './decimal-to-binary.js'

const stack = new Stack()

stack.push('Davi')
stack.push('Lidy')
stack.push('Edy')

console.log('is empty? ', stack.isEmpty())
console.log('toString():', stack.toString())
console.log('Peek: ', stack.peek())
console.log('Size: ', stack.size())

stack.pop()
console.log('stack.pop()')

console.log('Peek: ', stack.peek())
console.log('Size: ', stack.size())

stack.clear()
console.log('stack.clear()')

console.log('Size: ', stack.size())
console.log('is empty? ', stack.isEmpty())

console.log('Decimal / Binary')
console.log('10 / ' + decimalToBinary(10))