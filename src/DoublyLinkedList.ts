import { DoublyList, DoublyNode, DoublyNodeUnion } from '~/types/LinkedList'

class Node implements DoublyNode {
  value: number
  previous: DoublyNodeUnion
  next: DoublyNodeUnion

  constructor (value: number) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

export class DoublyLinkedList implements DoublyList {
  head: DoublyNode
  tail: DoublyNode
  size: number

  constructor (value: number | null, head?: DoublyNode, tail?: DoublyNode) {
    this.head = head ?? {
      next: null,
      previous: null,
      value: value
    }
    this.tail = this.head
    this.size = value ? 1 : 0
  }

  /* Insert node at the beginning of the linked list */
  prepend (value: number): void {
    const newNode: DoublyNode = new Node(value)

    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode

    this.size++
  }

  /* Insert node at the end of the linked list */
  append (value: number): void {
    const newNode: DoublyNode = new Node(value)
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode

    this.size++
  }

  /* Insert node at a given index */
  insert (value: number, index: number): number | null {
    if (index > this.size || index < 0) {
      return null
    }

    if (index === 0) {
      this.prepend(value)
      return value
    }

    if (index === this.size) {
      this.append(value)
      return value
    }

    let count: number = 0
    let currentNode: DoublyNode = this.head
    while (count < index - 1) { // move to the value just before the position
      currentNode = currentNode.next as DoublyNode
      count++
    }

    const newNode: DoublyNode = new Node(value)

    currentNode.next = newNode
    newNode.previous = currentNode
    newNode.next = currentNode.next

    return value
  }

  // print the contents of the linked list
  printList (): void {
    let currentNode: DoublyNode = this.head
    while (currentNode) {
      console.log(currentNode)
      currentNode = currentNode.next as DoublyNode
    }
  }

  // get the value of a node at a given position
  getValueAtIndex (index: number) : number | null {
    if (index < 0 || index > this.size) return null
    let count: number = 0
    let currentNode: DoublyNode = this.head
    while (count < index) {
      currentNode = currentNode.next as DoublyNode
      count++
    }
    return currentNode.value
  }
}
