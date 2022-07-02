import { twoSum } from '~/src/TwoSum/TwoSum'

describe('TwoSum', () => {
  it('returns indices of the two numbers such that they add up to target', () => {
    const target9 = twoSum([2, 7, 11, 15], 9)
    const target6 = twoSum([3, 2, 4], 6)
    const target6_ = twoSum([3, 3], 6)
    const target0 = twoSum([0, 4, 3, 0, 6, 8, 2], 0)
    const target8 = twoSum([-1, -2, -3, -4, -5], -8)

    expect(target9).toStrictEqual([0, 1])
    expect(target6).toStrictEqual([1, 2])
    expect(target6_).toStrictEqual([0, 1])
    expect(target0).toStrictEqual([0, 3])
    expect(target8).toStrictEqual([2, 4])
  })
})
