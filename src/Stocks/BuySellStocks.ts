/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any

time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. */

import { PriceDifferences } from '~/types/Stocks'

export const maxProfit = function (prices: number[]): number {
  /*
  * 1. Loop through the prices
  * 2. While on current price, loop through the remaining prices
  * 3. Skip until you find the next <= the current number
  * 4. Add the difference (between current no. & the last <= number)
  * 5. Repeat 2 & 3 until you get to the last price
  *  */

  const priceDifferences = groupPriceDifferences(prices)

  let maximumProfit: number = 0
  for (const key in priceDifferences) {
    const regrouped: any = regroupSimilarIndexes(priceDifferences[key])
    for (const regroupedKey in regrouped) {
      maximumProfit += Math.max(...regrouped[regroupedKey])
    }
  }

  return maximumProfit
}

function groupPriceDifferences (prices: number[]): any {
  let count: number = 0

  const priceDifferences: any = {}

  while (count < prices.length) {
    let innerCount: number = count + 1

    while (innerCount < prices.length) {
      if (prices[innerCount] >= prices[count]) {
        const pricePair: PriceDifferences = { index: innerCount, val: prices[innerCount] - prices[count] }
        if (prices[innerCount] in priceDifferences) {
          priceDifferences[`${prices[innerCount]}`].push(pricePair)
        } else {
          priceDifferences[`${prices[innerCount]}`] = [pricePair]
        }
        break
      }
      innerCount++
    }
    count++
  }

  return priceDifferences
}

function regroupSimilarIndexes (prices: PriceDifferences[]): any {
  let count: number = 0
  const regrouped: any = {}
  while (count < prices.length) {
    if (prices[count].index in regrouped) {
      regrouped[prices[count].index].push(prices[count].val)
    } else {
      regrouped[prices[count].index] = [prices[count].val]
    }
    count++
  }

  return regrouped
}
