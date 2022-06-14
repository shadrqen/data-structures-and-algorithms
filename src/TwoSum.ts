export function twoSum (nums: number[], target: number): number[] {
  let count: number = 0
  const sumIndices = []
  while (count < nums.length && sumIndices.length === 0) {
    let innerCount = count + 1
    while (innerCount < nums.length) {
      if (nums[count] + nums[innerCount] === target) {
        sumIndices.push(count, innerCount)
        break
      }
      innerCount++
    }
    count++
  }

  return sumIndices
}
