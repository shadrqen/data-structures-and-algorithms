import { maxProfit } from '~/src/BuySellStocks'

describe('Buying and Selling Stocks for Max Profit', () => {
  it('Should return the maximum profit achievable by buying and selling stocks', () => {
    const profit7 = maxProfit([7, 1, 5, 3, 6, 4])
    const profit4 = maxProfit([1, 2, 3, 4, 5])
    const profit0 = maxProfit([7, 6, 4, 3, 1])
    const profit3 = maxProfit([2, 1, 2, 1, 0, 1, 2])

    expect(profit7).toBe(7)
    expect(profit4).toBe(4)
    expect(profit0).toBe(0)
    expect(profit3).toBe(3)
  })
})
