// const squared = function(x) {
//   return x * x
// }

// const squared = x => {
//   return x * x
// }

// const square = x => x * x

const fullName = 'Ryan Mercadante'

const getFirstName = fullName => fullName.split(' ')[0]

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(value => value * this.multiplyBy)
  }
}

console.log(multiplier.multiply())