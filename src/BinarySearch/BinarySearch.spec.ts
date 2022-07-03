import { binarySearch } from '~/src/BinarySearch/BinarySearch'

describe('BinarySearch', function () {
  it('should return index of number if it exists in an array in O(log n) time', () => {
    const arrayToSearch = [-2, 1, 2, 4, 5, 7, 9, 14, 18]
    const numberToSearch = 9

    const numberIndex: number = binarySearch(arrayToSearch, numberToSearch)

    expect(numberIndex).toBeGreaterThan(-1)
  })
  it('should return -1 if number doesn\'nt exist in an array in O(log n) time', () => {
    const arrayToSearch = [-2, 1, 2, 4, 5, 7, 9, 14, 18]
    const numberToSearch = 6

    const numberIndex: number = binarySearch(arrayToSearch, numberToSearch)

    expect(numberIndex).toBe(-1)
  })
})
