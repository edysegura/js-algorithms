export class Node {
  construction(element) {
    this.element = element
    this.next = null
  }
}

export class LinkedList {
  #count = 0
  #head = null

  push(element) {
    const node = new Node(element)
    if (this.#head === null) {
      this.#head = node
    } else {
      let current = this.#head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.#count++
  }

  size() {
    return this.#count
  }

  isEmpty() {
    return this.size() === 0
  }

}
