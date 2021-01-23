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
    return this.#items[this.#index - 1]
  }

  pop() {
    if (!this.isEmpty()) {
      const index = this.#index - 1
      const item = this.#items[index]
      delete this.#items[index]
      this.#index--
      return item
    }
  }

  isEmpty() {
    return this.#index === 0
  }

  size() {
    return this.#index
  }

  clear() {
    this.#items = {}
    this.#index = 0
  }
}
