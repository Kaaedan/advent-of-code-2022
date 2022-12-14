const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split(/\n/)

const dataFromShape = {
  X: {
    points: 1,
    beatenBy: 'B',
    winOver: 'C',
    draw: 'A'
  },
  Y: {
    points: 2,
    beatenBy: 'C',
    winOver: 'A',
    draw: 'B'
  },
  Z: {
    points: 3,
    beatenBy: 'A',
    winOver: 'B',
    draw: 'C'
  }
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const getMyPlay = (elfPlay, roundResult) => {
  const value = Object.values(dataFromShape).find((shape => shape[roundResult] === elfPlay))
  return getKeyByValue(dataFromShape,value)
}

const points = input.reduce((points, round) => {
  const [elfPlay, roundResult] = round.split(' ')

  if (roundResult === 'Y') {
    const myPlay = getMyPlay(elfPlay, 'draw')
    points += dataFromShape[myPlay].points + 3
  } else if(roundResult === 'X') {
    const myPlay = getMyPlay(elfPlay, 'beatenBy')
    points += dataFromShape[myPlay].points
  } else {
    const myPlay = getMyPlay(elfPlay, 'winOver')
    points += dataFromShape[myPlay].points + 6
  }
  return points
}, 0)

console.log('My total score would be :', points, 'points.')



