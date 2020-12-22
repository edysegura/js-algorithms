const pairs1 = [1, 2, 2, 3, 3]

function process(pairs) {
  return pairs.reduce((acc, current) => acc ^ current)
}

console.log(process(pairs))
