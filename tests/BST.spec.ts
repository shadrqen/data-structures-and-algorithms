import { BinarySearchTree } from '~/src/BinarySearchTree'

describe('should insert data', function () {
  it('should insert data when the tree is empty', () => {
    const myBST = new BinarySearchTree()
    const valueToInsert = 1

    myBST.insert(valueToInsert)

    expect(myBST.root?.value).toBe(valueToInsert)
  })

  it('should insert data when the tree is not empty', () => {
    const myBST = new BinarySearchTree()
    const value1ToInsert = 1
    const value2ToInsert = 3

    // insert first root element
    myBST.insert(2)
    myBST.insert(value1ToInsert)
    myBST.insert(value2ToInsert)

    expect(myBST.search(myBST.root, value1ToInsert)).toBe(true)
    expect(myBST.search(myBST.root, value2ToInsert)).toBe(true)
  })

  it('should remove data', () => {
    const myBST = new BinarySearchTree()
    const valueToSearch = 30

    // insert first root element
    myBST.insert(20)
    myBST.insert(10)
    myBST.insert(valueToSearch)

    expect(myBST.search(myBST.root, valueToSearch)).toBe(true)

    // remove the element
    myBST.remove(valueToSearch)

    // expect the value not to exist
    expect(myBST.search(myBST.root, valueToSearch)).toBe(false)
  })
})
