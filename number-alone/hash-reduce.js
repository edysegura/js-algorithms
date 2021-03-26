const pairs1 = [1, 2, 2, 3, 3]
const pairs2 = [5, 5, 6, 6, 4]

function impostorReducer(accumulated, current) {
  if (accumulated[current]) {
    delete accumulated[current]
  } else {
    accumulated[current] = current
  }
  return accumulated
}

function findImpostor(pairs) {
  const hash = pairs.reduce(impostorReducer, {})
  return +Object.keys(hash)
}

console.log(findImpostor(pairs1)) // 1
console.log(findImpostor(pairs2)) // 4
