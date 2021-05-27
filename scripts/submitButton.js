import { DiamondSizes } from "./DiamondSizes.js"
import { Metals } from "./metals.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (KneelDiamonds.target.id === "orderButton") {
            orderBuilder.push( setMetal, setSize, setStyle )

       }
       
       return orderBuilder()
    }
) 
