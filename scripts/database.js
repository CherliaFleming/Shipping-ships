
const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Haulet", dockId: 3},
        { id: 2, name: "Hauldavort", dockId: 1},
        { id: 3, name: "Haulcore", dockId: 2},
        { id: 4, name: "Hauly", dockId: 4}
    ]
}

export const getDocks = () => {
    structuredClone(database.docks)
}

export const getHaulers = () => {
    structuredClone(database.haulers)
}