const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split(/\n/)

const dataFromShape = {
  X: {
    points: 1,
    beatenBy: 'B',
    draw: 'A'
  },
  Y: {
    points: 2,
    beatenBy: 'C',
    draw: 'B'
  },
  Z: {
    points: 3,
    beatenBy: 'A',
    draw: 'C'
  }
}

const points = input.reduce((points, round) => {
  const [elfPlay, myPlay] = round.split(' ')

  if (elfPlay === dataFromShape[myPlay].draw) {
    points += dataFromShape[myPlay].points + 3
  } else if(elfPlay === dataFromShape[myPlay].beatenBy) {
    points += dataFromShape[myPlay].points
  } else {
    points += dataFromShape[myPlay].points + 6
  }
  return points
}, 0)

console.log('My total score would be :', points, 'points.')
