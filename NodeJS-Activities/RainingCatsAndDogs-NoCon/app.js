let dog = {
  raining: true,
  noise: 'Woof',
  makeNoise: function () {
    if (this.raining === true) {
      console.log(this.noise)
    }
  },
}

let cat = {
  raining: false,
  noise: 'Meow',
  makeNoise: function () {
    if (this.raining === true) {
      console.log(this.noise)
    }
  },
}

function massHysteria(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
  }
}

dog.makeNoise()
cat.raining = true
cat.makeNoise()

massHysteria(dog, cat)
