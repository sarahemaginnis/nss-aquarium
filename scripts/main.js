// import { getFish } from './database.js'

import { FishList } from './fishlist.js'

const allFish = FishList()

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