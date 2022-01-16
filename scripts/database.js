const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3
        },
        {
            name: "Heaven's Door",
            food: "worm",
            size: 6
        },
        {
            name: "The Grouch",
            food: "pellets",
            size: 16
        },
        {
            name: "Inigo Montoya",
            food: "flakes",
            size: 4
        },
        {
            name: "Common",
            food: "algae",
            size: 6
        }
    ]
};
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};