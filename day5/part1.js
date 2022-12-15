const fs = require('fs')

let [crates, actions] = fs.readFileSync('./input.txt', 'utf8').split(/\n\n/)

crates = crates.split(/\n/).reverse()

let cratesAsArray = {}

for (let index = 1; index < crates.length; index++) {
  const indexAsArray = crates[index].split('')
  for (let subIndex = 1; subIndex < indexAsArray.length; subIndex += 4) {
    if (indexAsArray[subIndex] !== ' ') {
      const indexToPush = Math.floor(subIndex / 4) + 1
      if (!cratesAsArray[indexToPush])cratesAsArray[indexToPush] = []
     cratesAsArray[indexToPush].push(indexAsArray[subIndex])
    }
  }
}

actions.split(/\n/).forEach(action => {
  const [, quantity, from, to] = action.match(/move (\d+) from (\d+) to (\d+)/)
  for (let index = 0; index < quantity; index++) {
    const toMove = cratesAsArray[from].pop()
   cratesAsArray[to].push(toMove)
  }
});

const answer = Object.values(cratesAsArray).reduce((acc, array) => {
  acc += array.pop()
  return acc
},'')

console.log(answer)