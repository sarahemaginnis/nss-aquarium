import { getFish } from './database.js'

import { FishList } from './fishlist.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// /*
//     What is the CSS selector for the element where you
//     want to display the fish?

//     Use . for elements with a "class" attribute
//     Use # for elements with an "id" attribute
//  */

const parentHTMLElement = document.querySelector('#javascript')
    
parentHTMLElement.innerHTML = FishList()

import { mostHolyFish } from './database.js'

console.log(mostHolyFish())

import { soldierFish } from './database.js'

console.log(soldierFish())

import { nonHolyFish } from './database.js'

console.log(nonHolyFish())