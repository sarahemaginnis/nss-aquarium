const database = {
    fish: [
        {
            name: "Heaven's Door",
            food: "worm",
            length: 6,
            species: "Angelfish",
            location: "South America",
            image: "./images/angelfish.jpg"
        },
        {
            name: "The Grouch",
            food: "pellets",
            length: 16,
            species: "Oscar",
            location: "Central America",
            image: "./images/oscar.jpg"
        },
        {
            name: "Inigo Montoya",
            food: "flakes",
            length: 4,
            species: "Swordtail",
            location: "Malaysia",
            image: "./images/swordtail.jpg"
        },
        {
            name: "Common",
            food: "algae",
            length: 6,
            species: "Molly",
            location: "South America",
            image: "./images/molly.jpg"
        }
    ]
};
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const mHFish of database.fish) {
        if (mHFish.length % 3 === 0) {
            holyFish.push(mHFish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const mHFish of database.fish) {
        if (mHFish.length % 5 === 0) {
            soldiers.push(mHFish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const mHFish of database.fish) {
        if (mHFish.length % 5 !== 0 && mHFish.length % 3 !== 0) {
            regularFish.push(mHFish)
        }
    }
    return regularFish
}