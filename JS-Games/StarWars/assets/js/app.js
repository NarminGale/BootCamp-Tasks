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
  }
})
