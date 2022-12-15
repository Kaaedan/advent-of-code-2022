const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8')

const getFourChars = (index) => {
  let fourChars = []
  if(index < 13) {
    return
  } else {
    for (let subIndex = index; subIndex > index - 14; subIndex--) {
      fourChars.push(input[subIndex])
    }
    return fourChars
  }
}

const isFirstMarker = (fourChars) => {
  if(fourChars.length === new Set(fourChars).size) {
    return true
  }
  return false
}

let answer = 0
for (let index = 0; index < input.length; index++) {
  const fourChars = getFourChars(index)
  if(fourChars && isFirstMarker(fourChars)){
    answer = index + 1
    break
  }
}

console.log(answer)