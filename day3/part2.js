const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split(/\n/)

const getItemValue = (item) => {
  if (item === item.toUpperCase()) {
    return item.charCodeAt() - 38
  } else {
    return item.charCodeAt() - 96
  }
}

let commonBadges = []

for (let index = 0; index < input.length; index += 3) {
  const rucksacks = [input[index].split(''), input[index+1].split(''), input[index+2].split('')]
  const common = rucksacks.reduce((p, c) => p.filter(e => c.includes(e)))
  commonBadges.push(common[0])
}

const sum = commonBadges.reduce((sum, item) => {
  sum += getItemValue(item)
  return sum
}, 0)

console.log(sum)