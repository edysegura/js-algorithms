const pairs1 = [1, 2, 2, 3, 3]
const pairs2 = [5, 5, 6, 6, 4]

function process(pairs) {
  return pairs.reduce((acc, current) => acc ^ current)
}

console.log(process(pairs1))
console.log(process(pairs2))
