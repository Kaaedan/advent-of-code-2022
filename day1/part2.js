const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'utf8').split(/\n\n/)
input = input.map((inventoryLists) => inventoryLists.split(/\n/)).map((elfCalories) => { return elfCalories.map((calory) => {return +calory})})

const carriersSumed = input.reduce((caloriesAcc, inventory) => {
  caloriesSumed = inventory.reduce((sum, calory) => {
    return sum + calory
  }, 0)
  caloriesAcc.push(caloriesSumed)
  return caloriesAcc
}, [])

const carriersSorted = carriersSumed.sort((a,b) => a - b)
const sumTopThreeCarriers = carriersSorted.slice(-3).reduce((sum, carrier) => sum + carrier)

console.log('The sum calories of the top three elves is :', sumTopThreeCarriers, 'calories')
