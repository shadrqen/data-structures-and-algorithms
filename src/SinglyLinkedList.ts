import { SinglyList, SinglyNode } from '../types/linked-lists'

export class Node implements SinglyNode {
  data: number
  next: SinglyNode

  constructor (data: number, next: SinglyNode) {
    this.data = data
    this.next = next
  }
}

export class SinglyLinkedList implements SinglyList {
  head: SinglyNode
  size: number

  constructor (head: SinglyNode = {}) {
    this.head = head
    this.size = 0
  }

  insertFirst (data: number) {
    this.head = new Node(data, this.head)
  }
}
