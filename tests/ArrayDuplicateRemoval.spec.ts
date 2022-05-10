import { removeDuplicates } from '~/src/ArrayDuplicateRemoval'

describe('Array Duplicates Removal', () => {
  it('should remove duplicates in-place given an integer array nums sorted in non-decreasing order', () => {
    const sortedArray1 = [1, 1, 2]
    const sortedArray2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const nonDuplicateArray1 = removeDuplicates(sortedArray1)
    const nonDuplicateArray2 = removeDuplicates(sortedArray2)

    expect(nonDuplicateArray1).toStrictEqual([1, 2])
    expect(nonDuplicateArray2).toStrictEqual([0, 1, 2, 3, 4])
  })
})
