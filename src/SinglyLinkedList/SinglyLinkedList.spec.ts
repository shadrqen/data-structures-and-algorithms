import { SinglyLinkedList } from '~/src/SinglyLinkedList/SinglyLinkedList'

describe('Singly Linked List', () => {
  it('Inserts element at the beginning', () => {
    const sll = new SinglyLinkedList(null)
    const dataToInsert = 100

    sll.insertAtTheBeginning(dataToInsert)

    expect(sll.head?.data).toBe(dataToInsert)
  })

  it('Inserts at the end', () => {
    const sll = new SinglyLinkedList(null)
    const dataToInsertFirst = 100
    const dataToInsertLast = 900

    sll.insertAtTheBeginning(dataToInsertFirst)
    sll.insertAtTheEnd(dataToInsertLast)

    expect(sll.getDataAtPosition(1)).toBe(dataToInsertLast)
  })

  it('Inserts at a given index', () => {
    const sll = new SinglyLinkedList(null)
    const dataToInsertFirst = 100
    const dataToInsertLast = 900
    const indexData = {
      data: 200,
      position: 1
    }

    sll.insertAtTheBeginning(dataToInsertFirst)
    sll.insertAtTheEnd(dataToInsertLast)
    sll.insertAtIndex(indexData.data, indexData.position)

    expect(sll.getDataAtPosition(0)).toBe(dataToInsertFirst)
    expect(sll.getDataAtPosition(indexData.position)).toBe(indexData.data)
    expect(sll.getDataAtPosition(2)).toBe(dataToInsertLast)
  })

  it('Removes at a given index', () => {
    const sll = new SinglyLinkedList(null)
    const dataToInsertFirst = 100
    const dataToInsertLast = 900
    const positionToRemove = 0

    sll.insertAtTheBeginning(dataToInsertFirst)
    sll.insertAtTheEnd(dataToInsertLast)
    sll.removeAtIndex(positionToRemove)

    expect(sll.getDataAtPosition(positionToRemove)).not.toBe(dataToInsertFirst)
  })

  it('Reverses a linked list', () => {
    const sll = new SinglyLinkedList(null)
    const dataToInsertFirst = 100
    const dataToInsertLast = 300

    sll.insertAtTheBeginning(dataToInsertFirst)
    sll.insertAtTheEnd(dataToInsertLast)

    expect(sll.getDataAtPosition(0, sll.reverseList())).toBe(dataToInsertLast)
  })
})
