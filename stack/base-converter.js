import { Stack } from './Stack.js'

export function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let currentNumber = decNumber
  let remainder
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    throw RangeError('Out of range, please inform a base between 2 and 36')
  }

  while (currentNumber > 0) {
    remainder = Math.floor(currentNumber % base)
    remStack.push(remainder)
    currentNumber = Math.floor(currentNumber / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}
