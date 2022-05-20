/**
 * algorithm
 * 1 Loop through array
 * 2 Pick current element A
 * 3 Loop through the next elements from the next one
 * 4 Pick current element B
 * 5 Loop through the next elements from the next next one
 * 6 Pick current element C
 * 7 Add A+B+C and see whether A+B+C = 0
 * 8 If it does, push the array [A, B, C] into the return array
 * 9 Repeat from point 2
 * @param {array[][]} nums
 */

export function threeSum (nums: number[]) {
  if (nums.length > 2) {
    let count: number = 0
    const sumArray: number[][] = []
    const coveredIndices: number[] = []
    while (count < nums.length) {
      let layer2Count = count + 1
      while (layer2Count < nums.length) {
        let layer3Count = layer2Count + 1
        while (layer3Count < nums.length) {
          const sumIsZero = nums[count] + nums[layer2Count] + nums[layer3Count] === 0
          const indexCovered: boolean = [count, layer2Count, layer3Count].every(num => coveredIndices.includes(num))
          if (sumIsZero && !indexCovered) {
            sumArray.push([nums[count], nums[layer2Count], nums[layer3Count]])
            coveredIndices.push(count, layer2Count, layer3Count)
          }
          layer3Count++
        }
        layer2Count++
      }
      count++
    }
    return sumArray
  } else {
    return [[]]
  }
}

export const sort2DArray = (arr: number[][]) : number[] => {
  /**
   * First break the array from 2D to 1D
   * Then sort the resulting array
   */
  return arr.reduce(function (prev, next) {
    return prev.concat(next)
  }).sort((a, b) => a - b)
}
