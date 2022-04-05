import { SinglyList, SinglyNode } from '../types/linked-lists'

class Node implements SinglyNode {
  data: number
  next: SinglyNode

  constructor (data: number, next: SinglyNode) {
    this.data = data
    this.next = next
  }
}

class SinglyLinkedList implements SinglyList {
  head: SinglyNode
  size: number

  constructor (head: SinglyNode = null) {
    this.head = head
    this.size = 0
  }

  insertFirst (data: number) {
    this.head = new Node(data, this.head)
  }
}

const sll = new SinglyLinkedList()

sll.insertFirst(200)

console.log('----------------------------------')

console.log(sll)

console.log('----------------------------------')
