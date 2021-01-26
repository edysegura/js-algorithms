/**
 * Stack Data Structure in plain JavaScript
 */
export class Stack {

  #items = {}
  #index = 0

  push(item) {
    this.#items[this.#index] = item
    this.#index++
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.#items[this.#index - 1]
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.#index--
    const item = this.#items[this.#index]
    delete this.#items[this.#index]
    return item
  }

  isEmpty() {
    return this.#index === 0
  }

  size() {
    return this.#index
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }
}
