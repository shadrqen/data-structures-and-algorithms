export function binarySearch (nums: number[], target: number): number {
  // set two points, start and end
  let start: number = 0
  let end: number = nums.length
  while (start <= end) {
    /*
    * get the middle of the array and check whether the target number is in the
    * top half or bottom half. This way, we divide the problem into two */
    const middle: number = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      /*
        * if number at middle is less than target, then move the start to the
        *  top half because it means that the target is in that half */
      start = middle + 1
    } else { // else move the end to the bottom half
      end = middle - 1
    }
  }
  /* means the target is not present */
  return -1
}
