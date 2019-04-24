//1.1 Types simples

const name = 'Jacques'  // const permet de déclarer une variable dont la portée est celle du bloc courant en initialisant sa valeur.
let age = 80 // const permet de déclarer une variable dont la portée est celle du bloc courant en initialisant sa valeur.
let useless = 'something' // const permet de déclarer une variable dont la portée est celle du bloc courant en initialisant sa valeur.

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

const savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)