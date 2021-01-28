const peerNumbers = [ 9, 3, 9, 3, 7, 5, 5, 8 ]

function whoIsAlone(items) {
  const lonelyNumbers = {}

  for (const item of items) {
    lonelyNumbers[item]
      ? delete lonelyNumbers[item]
      : lonelyNumbers[item] = item
  }

  return Object
    .keys(lonelyNumbers)
    .map(value => +value)
}

console.log(whoIsAlone(peerNumbers)) // [ 7, 8 ]