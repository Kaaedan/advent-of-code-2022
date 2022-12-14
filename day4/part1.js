const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split(/\n/)

const getElfSections = (elfArray) => {
  const [startSection, endSection] = elfArray
  let elfSections = []
  for (let index = Number(startSection); index <= endSection; index++) {
    elfSections.push(index)
  }
  return elfSections
}

const res = input
  .map((pair) => pair.split(','))
  .map(([firstElf, secondElf]) => {
    const firstElfSections = getElfSections(firstElf.split('-'))
    const secondElfSections = getElfSections(secondElf.split('-'))
    if (firstElfSections.length > secondElfSections.length) {
      firstElfSections.forEach((section) => {
        const index = secondElfSections.indexOf(section)
        if (index > -1){
          secondElfSections.splice(index, 1)
        }
      })
      return secondElfSections
    } else {
      secondElfSections.forEach((section) => {
        const index = firstElfSections.indexOf(section)
        if (index > -1){
          firstElfSections.splice(index, 1)
        }
      })
      return firstElfSections
    }
  })
  .reduce((acc, arr) => {
    if(arr.length === 0) acc++
    return acc
  }, 0)

console.log(res)