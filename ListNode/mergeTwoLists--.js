/* function mergeTwoLists(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b)
} */

/* function mergeTwoLists(arr1, arr2) {
  let merge = []
  let i = 0,
    j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge.push(arr1[i])
      i++
    } else {
      merge.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    merge.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    merge.push(arr2[j])
    j++
  }

  return merge
} */

/* class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

function mergeTwoLists(arr1, arr2) {
  let dummy = new ListNode(0)
  let current = dummy
  let p1 = arr1
  let p2 = arr2

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      current.next = p1
      p1 = p1.next
    } else {
      current.next = p2
      p2 = p2.next
    }

    current = current.next
  }

  if (p1 !== null) {
    current.next = p1
  } else {
    current.next = p2
  }
} */

let mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

class TreeNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function createLinkedList(arr) {
  let dummy = new TreeNode(0)
  let current = dummy

  for (val of arr) {
    current.next = new TreeNode(val)
    current = current.next
  }

  return dummy.next
}

function printLinkedList(head) {
  let result = []

  while (head) {
    result.push(head.val)
    head = head.next
  }

  console.log(result.join(' -> '))
}

let list1 = createLinkedList([1, 3, 5])
let list2 = createLinkedList([2, 4, 6])

let mergedList = mergeTwoLists(list1, list2)
printLinkedList(mergedList)
