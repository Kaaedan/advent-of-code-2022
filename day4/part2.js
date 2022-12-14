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
    const com = firstElfSections.filter((section) => !secondElfSections.includes(section))
    
    if(com.toString() !== firstElfSections.toString()) return true
  })
  .reduce((acc, isOverlaped) => {
    if(isOverlaped) acc++
    return acc
  }, 0)

console.log(res)