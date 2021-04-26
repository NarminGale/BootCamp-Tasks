// Creating an object to hold our characters.
var characters = {
  'Obi-Wan Kenobi': {
    name: 'Obi-Wan Kenobi',
    health: 120,
    attack: 8,
    imageUrl: './assets/images/obi-wan.jpg',
    enemyAttackBack: 15,
  },
  'Luke Skywalker': {
    name: 'Luke Skywalker',
    health: 100,
    attack: 14,
    imageUrl: './assets/images/luke-skywalker.jpg',
    enemyAttackBack: 5,
  },
  'Darth Sidious': {
    name: 'Darth Sidious',
    health: 150,
    attack: 8,
    imageUrl: './assets/images/darth-sidious.jpg',
    enemyAttackBack: 20,
  },
  'Darth Maul': {
    name: 'Darth Maul',
    health: 180,
    attack: 7,
    imageUrl: './assets/images/Darth-Maul.jpg',
    enemyAttackBack: 25,
  },
}

let myChars = []

$(document).ready(function () {
  for (let i in characters) {
    let character = $('<div>').addClass('character')
    character.data('name', characters[i].name)
    let characterName = $('<div>').addClass('character-name')
    characterName.text(characters[i].name)
    let image = $('<img>').addClass('character-image')
    image.attr('alt', 'img')
    image.attr('src', characters[i].imageUrl)
    let characterHealth = $('<div>').addClass('character-health')
    characterHealth.text(characters[i].health)

    character.append(characterName).append(image).append(characterHealth)
    $('#characters').append(character)
    myChars.push(character)
  }

  // selecting your character
  $('#characters').click(function (e) {
    let parentEl = $(e.target).parent()
    let dataName = parentEl.data('name')
    if (parentEl.attr('class') === 'character') {
      $('#selected-character').append(parentEl)
      $('#characters-section').html('')
    } else {
      return false
    }
    for (i of myChars) {
      if (i.data('name') === dataName) {
        myChars = jQuery.grep(myChars, function (value) {
          return value != i
        })
      }
    }
    for (i of myChars) {
      $('.enemies').append(i)
    }
  })

  // selecting enemies
  $('.enemies').one('click', function (e) {
    let parentEl = $(e.target).parent()
    let dataName = parentEl.data('name')
    if (parentEl.attr('class') === 'character') {
      $('#defender').append(parentEl)
    }
    for (i of myChars) {
      if (i.data('name') === dataName) {
        myChars = jQuery.grep(myChars, function (value) {
          return value != i
        })
      }
    }
    for (i of myChars) {
      $('.enemies').append(i)
    }
  })

  // attacking calc
  $('#attack-button').click(function check() {
    let charKey = $(
      '#selected-character-section #selected-character .character'
    ).data('name')
    let defenderKey = $(
      '#action .character-section #defender .character .character-name'
    ).text()
    let charHealth = characters[charKey].health
    let charAttack = characters[charKey].attack

    let defHealth = characters[defenderKey].health
    let defAttack = characters[defenderKey].enemyAttackBack

    charHealth = charHealth - defAttack
    defHealth = defHealth - charAttack
    console.log(charHealth)
    console.log(defHealth)

    $(
      '#selected-character-section #selected-character .character .character-health'
    ).html(charHealth)
    $('#action .character-section #defender .character .character-health').html(
      defHealth
    )
  })
})
