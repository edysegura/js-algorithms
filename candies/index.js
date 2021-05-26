const extraCandies = 3
const childrenCandies = [2, 3, 5, 1, 4]

export function greatestNumberOfCandies(childrenCandies, extraCandies) {
  const max = Math.max(...childrenCandies)
  return childrenCandies.map((candies) => candies + extraCandies >= max)
}

console.log(greatestNumberOfCandies(childrenCandies, extraCandies)) // [ true, true, true, false, true ]
