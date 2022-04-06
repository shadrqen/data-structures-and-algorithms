import { SinglyLinkedList } from '~/src/SinglyLinkedList'

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
})
