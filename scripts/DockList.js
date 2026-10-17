import { getDocks, getHaulers } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
        data-id="${dock.id}"
        data-location=">${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            // Get the id of the dock clicked
            const dockId = parseInt(itemClicked.dataset.id)

            // get haulers that are docked at the dock
            const haulers = getHaulers()
            let names = ""
            for (const hauler of haulers) {
                if (hauler.dockId === dockId) {
                    // Add it's name to the collector and if collector has a name in I need a "," before the next one 
                    if (names !== "") {
                        names += ", "
                    }
                    names += hauler.name
                }
            }
            // only check after the loop looks at every hauler
            if (names === "") {
                names = "nothing"
            }
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${names}`)
        }
        
                
            


    }
)