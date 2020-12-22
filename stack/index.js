import { Stack } from './Stack.js'

const stack = new Stack()

stack.push('Davi')
stack.push('Lidy')
stack.push('Edy')

console.log('is empty? ', stack.isEmpty())
console.log(stack.peek())
console.log(stack.size())

stack.pop()

console.log(stack.peek())
console.log(stack.size())
console.log('clear')
stack.clear()
console.log(stack.size())
console.log('is empty? ', stack.isEmpty())