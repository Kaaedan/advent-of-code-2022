const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'utf8').split(/\n\n/)
input = input.map((inventoryLists) => inventoryLists.split(/\n/)).map((elfCalories) => { return elfCalories.map((calory) => {return +calory})})

const topCarrier = input.reduce((maxCalories, inventory) => {
  sum = inventory.reduce((sum, calory) => {
    return sum + calory
  }, 0)
  if (sum > maxCalories) {
    maxCalories = sum
  }
  return maxCalories
}, 0)

console.log('The Elf with the most calories carries :', topCarrier, 'calories')
