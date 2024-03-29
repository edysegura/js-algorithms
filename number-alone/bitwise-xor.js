// const pairs1 = [1, 2, 2, 3, 3]
// const pairs2 = [5, 5, 6, 6, 4]

export function findImpostor(pairs) {
  return pairs.reduce((accumulated, current) => accumulated ^ current)
}

// console.log(findImpostor(pairs1)) // 1
// console.log(findImpostor(pairs2)) // 4
