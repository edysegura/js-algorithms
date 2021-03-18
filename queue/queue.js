export class Queue {
  #count = 0
  #lowestCount = 0
  #items = {}

  enqueue(element) {
    this.#items[this.#count] = element
    this.#count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const result = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]
    this.#lowestCount++
    return result
  }

  isEmpty() {
    return this.size() === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.#items[this.#lowestCount]
  }

  size() {
    return this.#count - this.#lowestCount
  }

  clear() {
    this.#items = {}
    this.#count = 0
    this.#lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ""
    }
    let queueString = `${this.#items[this.#lowestCount]}`
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      queueString += `,${this.#items[i]}`
    }
    return queueString
  }
}
