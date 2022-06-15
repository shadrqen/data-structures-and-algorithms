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

  it('should remove node with no child', () => {
    const myBST = new BinarySearchTree()
    const valueToSearch = 30

    // insert the elements
    myBST.insert(20)
    myBST.insert(10)
    myBST.insert(valueToSearch)
    expect(myBST.search(myBST.root, valueToSearch)).toBe(true)

    // remove the element
    myBST.remove(valueToSearch)

    // expect the value not to exist
    expect(myBST.search(myBST.root, valueToSearch)).toBe(false)
  })

  it('should remove node with one child', () => {
    const myBST = new BinarySearchTree()
    const valueToSearch = 9
    const nodeChild = 6

    // insert elements
    myBST.insert(14)
    myBST.insert(15)
    myBST.insert(nodeChild)
    myBST.insert(valueToSearch)

    // node should still exist
    expect(myBST.search(myBST.root, valueToSearch)).toBe(true)

    // remove the element
    myBST.remove(valueToSearch)

    // expect the value not to exist
    expect(myBST.search(myBST.root, valueToSearch)).toBe(false)

    // expect the child to still be there
    expect(myBST.search(myBST.root, nodeChild)).toBe(true)
  })

  it('should remove node with two children', () => {
    const myBST = new BinarySearchTree()
    const targetNodeValue = 8
    const child1 = 5
    const child2 = 9

    // insert elements element
    myBST.insert(12)
    myBST.insert(16)
    myBST.insert(child1)
    myBST.insert(child2)
    myBST.insert(targetNodeValue)

    // element should exist at first
    expect(myBST.search(myBST.root, targetNodeValue)).toBe(true)

    // remove the element
    myBST.remove(targetNodeValue, 'predecessor')

    // expect the value not to exist
    expect(myBST.search(myBST.root, targetNodeValue)).toBe(false)

    // expect both children to still be there
    expect(myBST.search(myBST.root, child1)).toBe(true)
    expect(myBST.search(myBST.root, child2)).toBe(true)
  })
})
