import { reverseString } from '~/src/ReverseString/ReverseString'

describe('Reverse String', function () {
  it('should reverse string', () => {
    const initialString: string = 'password'
    const expectedFinalString: string = 'drowssap'

    const reversedString: string = reverseString(initialString)

    expect(reversedString).toBe(expectedFinalString)
  })
})
