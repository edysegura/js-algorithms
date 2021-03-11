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
    return this.#count - this.#lowestCount === 0
  }
}
