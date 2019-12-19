const peerNumbers = [ 9,3,9,3,7 ]

function whoIsAlone (numbers) {
    let lonelyNumbers = {}
    const total = numbers.length

    for (let i = 0; i < total; i++) {
        if (lonelyNumbers[numbers[i]]) delete lonelyNumbers[numbers[i]]
        else lonelyNumbers[numbers[i]] = numbers[i]
    }

    return Object.keys(lonelyNumbers)
}

console.log(whoIsAlone(peerNumbers))