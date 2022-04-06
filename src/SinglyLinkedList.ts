import {
  DataAtPosition,
  SinglyList,
  SinglyNode,
  SinglyNodeUnion
}
  from '~/types/LinkedList'

export class Node implements SinglyNode {
  data: number
  next: SinglyNodeUnion

  constructor (data: number, next: SinglyNodeUnion = null) {
    this.data = data
    this.next = next
  }
}

export class SinglyLinkedList implements SinglyList {
  head: SinglyNodeUnion
  size: number

  constructor (head: SinglyNodeUnion = null) {
    this.head = head
    this.size = 0
  }

  insertAtTheBeginning (data: number) {
    this.head = new Node(data, this.head)
    this.size++
  }

  insertAtTheEnd (data: number) {
    if (!this.head) {
      this.head = new Node(data, null)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new Node(data, null)
    }
    this.size++
  }

  getDataAtPosition (index: number): DataAtPosition {
    if (index > this.size) {
      return null
    }

    let current: SinglyNode = this.head as SinglyNode

    let count: number = 0

    let data: number = current.data as number

    while (current) {
      if (count === index) {
        data = current.data as number
      }
      current = current.next as SinglyNode
      count++
    }

    return data
  }

  insertAtIndex (data: number, index: number): void {
    if (index > 0 && index > this.size) {
      return
    }

    if (index === 0) {
      this.insertAtTheBeginning(data)
    }

    let current: SinglyNode = this.head as SinglyNode
    let previous: SinglyNode = {}

    let count: number = 0

    while (count < index) {
      previous = current
      current = current.next as SinglyNode
      count++
    }

    const node = new Node(data, null)

    previous.next = node as SinglyNode
    node.next = current

    this.size++
  }
}
