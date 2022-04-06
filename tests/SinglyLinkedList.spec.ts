import { SinglyLinkedList } from '~/src/SinglyLinkedList'

describe('Singly Linked List', () => {
  it('Inserts element at the beginning', () => {
    const sll = new SinglyLinkedList()
    const dataToInsert = 200

    sll.insertFirst(dataToInsert)

    expect(sll.head.data).toBe(dataToInsert)
  })
})
