import { getShips } from "./database.js"


export const ShippingShipsList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-type="hauler"
        data-id=${ship.id}
        >${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

 document.addEventListener("click",
        (clickEvent) => {
        const itemClicked = clickEvent.target 

        //Was a hauler last item clicked?
        if (itemClicked.dataset.type ==="hauler") {

            // Get the id of the hauler clicked 
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0 

            //Interate all of the shipping ships 
            const shippingShips = getShips()
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (haulerId === ship.haulerId) {
                    // Increase the counter by 1 
                    shipCounter++
                }
            }
            window.alert(`This hauler is carrtying ${shipCounter} shipping ships`)

        }
    })