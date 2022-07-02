import { DoublyLinkedList } from '~/src/DoublyLinkedList/DoublyLinkedList'

describe('Doubly Linked List', () => {
  it('should prepend to the linked list', () => {
    const valueAtStartOfList = 8
    const myDoublyList = new DoublyLinkedList(1)

    myDoublyList.prepend(valueAtStartOfList)

    expect(myDoublyList.getValueAtIndex(0)).toBe(valueAtStartOfList)
  })

  it('should append to the linked list', () => {
    const valueAtEndOfList = 7
    const myDoublyList = new DoublyLinkedList(1)

    myDoublyList.append(valueAtEndOfList)

    expect(myDoublyList.getValueAtIndex(1)).toBe(valueAtEndOfList)
  })

  it('should insert at a given position in the linked list', () => {
    const valueAtPosition = 9
    const positionToInsert = 1
    const myDoublyList = new DoublyLinkedList(1)

    myDoublyList.prepend(4)
    myDoublyList.append(6)
    myDoublyList.insert(valueAtPosition, positionToInsert)

    expect(myDoublyList.getValueAtIndex(positionToInsert)).toBe(valueAtPosition)
  })

  it('should get a value a given position in the linked list', () => {
    const myDoublyList = new DoublyLinkedList(1)

    myDoublyList.prepend(9)
    myDoublyList.append(3)
    myDoublyList.insert(5, 1)

    expect(myDoublyList.getValueAtIndex(1)).toBe(5)
    expect(myDoublyList.getValueAtIndex(4)).toBe(null)
  })
})
