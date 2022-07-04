import { binarySearch } from '~/src/BinarySearch/BinarySearch'

describe('BinarySearch', function () {
  it('should return index of number if it exists in an array in O(log n) time', () => {
    const arrayToSearch = [-2, 1, 2, 4, 5, 7, 9, 14, 18]
    const arrayToSearch1 = [4, 5, 7]
    const arrayToSearch2 = [1, 3]
    const arrayToSearch3 = [2]
    const numberToSearch = 9
    const numberToSearch1 = 7
    const numberToSearch2 = 1
    const numberToSearch3 = 2

    const numberIndex: number = binarySearch(arrayToSearch, numberToSearch)
    const numberIndex1: number = binarySearch(arrayToSearch1, numberToSearch1)
    const numberIndex2: number = binarySearch(arrayToSearch2, numberToSearch2)
    const numberIndex3: number = binarySearch(arrayToSearch3, numberToSearch3)

    expect(numberIndex).toBeGreaterThan(-1)
    expect(numberIndex1).toBeGreaterThan(-1)
    expect(numberIndex2).toBeGreaterThan(-1)
    expect(numberIndex3).toBeGreaterThan(-1)
  })
  it('should return -1 if number doesn\'nt exist in an array in O(log n) time', () => {
    const arrayToSearch = [-2, 1, 2, 4, 5, 7, 9, 14, 18]
    const numberToSearch = 6

    const numberIndex: number = binarySearch(arrayToSearch, numberToSearch)

    expect(numberIndex).toBe(-1)
  })
})
