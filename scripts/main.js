import { ShippingShipsList } from "./ShippingShipsList.js"
import { HaulersList } from "./HaulersList.js"
import { DockList } from "./DockList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Shipping Ship Haulers Around The World</h1>

    <article class="details">
        <section class="detail--column list details__shipping-ships">
            <h2>Shipping Ships</h2>
            ${ShippingShipsList()}
        </section>

        <section class="detail--column list details__haulers">
            <h2>Hauling Ships</h2>
            ${HaulersList()}
        </section>

        <section class="detail--column list details__docks">
            <h2>Docks</h2>
            ${DockList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML