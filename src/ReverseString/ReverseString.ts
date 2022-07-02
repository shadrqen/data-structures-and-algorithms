export function reverseString (stringToReverse: string) : string {
  let start: number = 0
  let end: number = stringToReverse.length
  const stringArray: string[] = stringToReverse.split('')
  while (start < end) {
    /* store the element at the shifting start position */
    const tempStart: string = stringArray[start]
    /* interchange the elements */
    stringArray[start] = stringArray[end]
    stringArray[end] = tempStart
    start++
    end--
  }
  /* join the reversed array */
  return stringArray.join('')
}
