import { sort2DArray, threeSum } from '~/src/m/3Sum'

describe('3Sum', function () {
  it('should return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0', function () {
    const output1: number[][] = threeSum([-1, 0, 1, 2, -1, -4])
    const outputEmpty = threeSum([])
    const outputOneElement = threeSum([0])

    expect(sort2DArray(output1)).toEqual(sort2DArray([[-1, -1, 2], [-1, 0, 1]]))
    expect(outputEmpty).toStrictEqual([[]])
    expect(outputOneElement).toStrictEqual([[]])
  })
})
