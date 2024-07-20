class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) {
    const node = new Node(data)

    if (this.tail) {
      this.tail.next = node
    }

    if (!this.head) {
      this.head = node
    }

    this.tail = node
  }

  prepend(data) {
    const node = new Node(data, this.head)

    this.head = node

    if (!this.tail) {
      this.tail = node
    }
  }

  toArray() {
    let current = this.head
    let arr = []

    while (current) {
      arr.push(current)
      current = current.next
    }

    return arr
  }
}

const list = new LinkedList()
list.append('Hi')
list.append('My')
list.prepend('name')

list.toArray()

console.log(list.toArray())
console.log(list)
