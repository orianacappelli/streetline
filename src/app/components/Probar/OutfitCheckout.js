'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import Image from "next/image"
import style from "./OutfitCheckout.modules.css"

const OutfitCheckout = () => {
    const {outfit} = useAppContext();

    return (
      <div className="outfit-container">
        {outfit.map((product, index) => (
                <div key={index} className="outfit-item"> 
                    <Image
                        src={`/images/productos/${product.image}`} 
                        alt="producto" 
                        width={180} 
                        height={180}/>
                </div>
            ))}
      </div>
    )
}

export default OutfitCheckout;