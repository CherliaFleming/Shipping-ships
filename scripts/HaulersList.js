import { getHaulers } from "./database.js"


export const HaulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}