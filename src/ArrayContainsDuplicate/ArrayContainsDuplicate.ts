export function arrayContainsDuplicates (nums: number[]) : boolean {
  const uniqueArrayValues = [...new Set([...nums])]
  return uniqueArrayValues.length !== nums.length
}
