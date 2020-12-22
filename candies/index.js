const extraCandies = 3
const childrenCandies = [2, 3, 5, 1, 4]

function process(childrenCandies, extraCandies) {
  const max = childrenCandies.reduce((acc, current) =>
    acc > current ? acc : current
  )
  return childrenCandies.map((candies) => candies + extraCandies >= max)
}

console.log(process(childrenCandies, extraCandies))
