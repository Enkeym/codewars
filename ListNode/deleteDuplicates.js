/* class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

function deleteDuplicates(head) {
  let current = head
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

function createLinkedList(arr) {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

function linkedListToArray(head) {
  let arr = []
  let current = head
  while (current !== null) {
    arr.push(current.val)
    current = current.next
  }

  return arr
} */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

function deleteDuplicates(head) {
  if (!head) return head
  let current = head
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

let head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
)

console.log(deleteDuplicates(head))
