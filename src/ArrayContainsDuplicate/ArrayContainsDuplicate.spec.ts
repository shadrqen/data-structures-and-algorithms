import { arrayContainsDuplicates } from '~/src/ArrayContainsDuplicate/ArrayContainsDuplicate'

describe('ArrayContainsDuplicate', function () {
  it('should return false when array contains no duplicates', () => {
    const nums = [1, 3, 4, 6, 8]

    const containsDuplicates = arrayContainsDuplicates(nums)

    expect(containsDuplicates).toBe(false)
  })
  it('should return true when array contain duplicates', () => {
    const nums = [1, 3, 4, 3, 6, 8]

    const containsDuplicates = arrayContainsDuplicates(nums)

    expect(containsDuplicates).toBe(true)
  })
})
