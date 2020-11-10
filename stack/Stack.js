export class Stack {

  items = []

  push(item) {
    this.items.push(item)
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return !!this.items.length
  }
}
