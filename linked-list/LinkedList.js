export class Node {
  constructor(element) {
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

  toString() {
    if (this.#head === null) {
      return ''
    }

    let linkedListString = `${this.#head.element}`
    let current = this.#head.next

    for (let i = 1; i < this.size() && current !== null; i++) {
      linkedListString += `->${current.element}`
      current = current.next
    }

    return linkedListString
  }

}
