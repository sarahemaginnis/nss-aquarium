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