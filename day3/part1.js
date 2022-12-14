const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split(/\n/)

const getItemValue = (item) => {
  if (item === item.toUpperCase()) {
    return item.charCodeAt() - 38
  } else {
    return item.charCodeAt() - 96
  }
}

const commonItems = input.reduce((acc, rucksack) => {
  const firstCompartmentArr = rucksack.slice(0, rucksack.length/2).split('')
  const secondCompartmentArr = rucksack.slice(rucksack.length/2).split('')
  const common = firstCompartmentArr.filter((item) => secondCompartmentArr.includes(item))
  acc.push(common[0])
  return acc
}, [])

const sum = commonItems.reduce((sum, item) => {
  sum += getItemValue(item)
  return sum
}, 0)

console.log(sum)