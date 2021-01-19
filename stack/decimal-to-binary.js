import { Stack } from './Stack.js'

export function decimalToBinary(number) {
  const remainderStack = new Stack()
  let currentNumber = number
  let remainder
  let binaryString = ''

  while (currentNumber > 0) {
    remainder = Math.floor(currentNumber % 2)
    remainderStack.push(remainder)
    currentNumber = Math.floor(currentNumber / 2)
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString()
  }

  return binaryString
}