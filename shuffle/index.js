function shuffle(array) {
  var counter = array.length,
    temp,
    index
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter)
    // Decrease counter by 1
    counter--
    // And swap the last element with it
    temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

const numberList = [1, 2, 3, 4, 5, 6]
const namesList = ['Edy', 'Lidy', 'Davi']

console.log(numberList, shuffle([ ...numberList ]))
console.log(namesList, shuffle([ ...namesList ]))
