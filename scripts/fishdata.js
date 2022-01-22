export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const mHFish of database.fish) {
        if (mHFish.size % 3 === 0) {
            holyFish.push(mHFish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const mHFish of database.fish) {
        if (mHFish.size % 5 === 0) {
            soldiers.push(mHFish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const mHFish of database.fish) {
        if (mHFish.size % 5 !== 0 && mHFish.size % 3 !== 0) {
            regularFish.push(mHFish)
        }
    }
    return regularFish
}