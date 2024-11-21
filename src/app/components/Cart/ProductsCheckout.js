'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import Image from "next/image"
import { FaRegTrashCan } from "react-icons/fa6";
import style from "./ProductsCheckout.modules.css"

const ProductsCheckout = () => {
    const {cart, cartTotal, handleRemoveProduct} = useAppContext()
    return (
      <div className="carrito-container">
        <table className="productos-table">
          <thead>
            <tr>
              <th colSpan="5" className="logo-header">
                <Image
                  src={`/images/imgs/logo-st.svg`}
                  width={100}
                  height={100}
                  alt="Logo"
                />
              </th>
            </tr>
            <tr>
              <th>Producto</th>
              <th>Talle</th>
              <th>Color</th>
              <th>Unidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td className="producto-info">
                  <button onClick={() => handleRemoveProduct(product.id)} className="remove-btn"><FaRegTrashCan /></button>
                  <Image 
                    src={`/images/productos/${product.image}`}
                    alt={product.name}
                    className="product-img"
                    width={100}
                    height={100}
                  />
                  <span>{product.name}</span>
                </td>
                <td>{product.sizes}</td>
                <td>{product.colors}</td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="suma-container">
         
          <hr className="arriba"/>
          <div className="suma-info">
            <p>Total: $ {cartTotal()}</p>
          </div>
          <hr className="abajo"/>
        </div>
        <div className="cod-barra">
          <Image
            src={`/images/imgs/codigo-barra.png`}
            width={200}
            height={200}
            alt="codigo de barra"
          />
        </div>
      </div>
    )
}

export default ProductsCheckout;