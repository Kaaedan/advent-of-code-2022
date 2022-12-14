const fs = require('fs')

let [crates, actions] = fs.readFileSync('./input.txt', 'utf8').split(/\n\n/)

crates = crates.split(/\n/).reverse()
let cratesAsArray = {}
let previousIndex = 0

for (let index = 1; index < crates.length; index++) {
  const indexAsArray = crates[index].split('')
  for (let subIndex = 1; subIndex < indexAsArray.length; subIndex += 4) {
    if (indexAsArray[subIndex] !== ' ') {
      const indexToPush = Math.floor(subIndex / 4) + 1
      if (!cratesAsArray[indexToPush])cratesAsArray[indexToPush] = []
     cratesAsArray[indexToPush].push(indexAsArray[subIndex])
    }
    previousIndex = subIndex
  }
}

actions.split(/\n/).forEach(action => {
  const [, quantity, from, to] = action.match(/move (\d+) from (\d+) to (\d+)/)
    const toMove = cratesAsArray[from].slice(-quantity)
    cratesAsArray[to] = cratesAsArray[to].concat(toMove)
    cratesAsArray[from].splice(cratesAsArray[from].length-quantity, quantity)
});

console.log(Object.keys(cratesAsArray).length)

const answer = Object.values(cratesAsArray).reduce((acc, array) => {
  console.log(array.length)
  if (!array.length) return acc
  acc += array.pop()
  return acc
},'')

console.log(answer)