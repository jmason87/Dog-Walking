import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const cities = getCities()
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findCity = (walkerObj) => {
    let walkerCity = null

    for (const city of cities) {
        if (city.id === walkerObj.cityId) {
        walkerCity = city
        }
    }    
    return walkerCity    
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentWalkerCity = findCity(currentPetWalker)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentWalkerCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


