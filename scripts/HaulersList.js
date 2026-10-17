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

   document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = parseInt(itemClicked.dataset.haulerId)

            // Define a default object for the found hauler
            let haulingShip = { name:"Incorrect" }

            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (const hauler of haulers) {

                // Does the shippingShipId foreign key match the id of the current shipping ship?
                if (haulerId === hauler.id) {

                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }
            }
 // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
           window.alert(`${itemClicked.datase.name} is being hauled by ${haulingShip.name}`)
        }
    },
)