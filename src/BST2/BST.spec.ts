import { BST } from '~/src/BST2/BST'

describe('BST', function () {
  const createBST = (arr: number[]): BST => {
    const bst = new BST()

    arr.forEach(num => {
      bst.insert(num)
    })

    return bst
  }
  it('inserts node when empty', () => {
    const valToInsert: number = 2
    const bst = new BST()

    bst.insert(valToInsert)

    expect(bst.search(bst.root, valToInsert)).toBe(true)
  })
  it('inserts node when not empty', () => {
    const valuesToInsert: number[] = [3, 2, 4]

    const bst = createBST(valuesToInsert)

    expect(bst.search(bst.root, valuesToInsert[0])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[1])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[2])).toBe(true)
  })
  it('removes node with no children', () => {
    const valuesToInsert: number[] = [3, 2, 4]

    const bst = createBST(valuesToInsert)

    bst.remove(valuesToInsert[1])

    expect(bst.search(bst.root, valuesToInsert[0])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[1])).toBe(false)
    expect(bst.search(bst.root, valuesToInsert[2])).toBe(true)
  })
  it('removes node with one child', () => {
    const valuesToInsert: number[] = [3, 2, 4, 5]

    const bst = createBST(valuesToInsert)

    bst.remove(valuesToInsert[2])

    expect(bst.search(bst.root, valuesToInsert[0])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[1])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[2])).toBe(false)
    expect(bst.search(bst.root, valuesToInsert[3])).toBe(true)
  })
  it('removes node with two children', () => {
    const valuesToInsert: number[] = [8, 7, 4, 9, 6, 10, 12]
    const bst = createBST(valuesToInsert)

    bst.remove(valuesToInsert[4])

    expect(bst.search(bst.root, valuesToInsert[0])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[2])).toBe(true)
    expect(bst.search(bst.root, valuesToInsert[4])).toBe(false)
    expect(bst.search(bst.root, valuesToInsert[6])).toBe(true)
  })
  it('executes inorder traversal', () => {
    const bst = createBST([8, 7, 4, 9, 6, 10, 12])

    bst.inorderTraversal(bst.root)

    expect(bst.inOrderTraversedValues).toEqual([4, 6, 7, 8, 9, 10, 12])
  })
  it('executes preorder traversal', () => {
    const bst = createBST([8, 7, 4, 9, 6, 10, 12])

    bst.preorderTraversal(bst.root)

    /* TODO: To integrate the test below
    * expect(bst.preOrderTraversedValues).toEqual([8, 4, 6, 7, 9, 10, 12]) */
  })
  it('executes postorder traversal', () => {
    const bst = createBST([8, 7, 4, 9, 6, 10, 12])

    bst.postorderTraversal(bst.root)

    /* TODO: To integrate the test below
    * expect(bst.postOrderTraversedValues).toEqual([4, 6, 7, 9, 10, 12, 8]) */
  })
})
