export class Node {
  construction(element) {
    this.element = element
    this.next = null
  }
}

export class LinkedList {
  #count = 0
  #head = null
}
