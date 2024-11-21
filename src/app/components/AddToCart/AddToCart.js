"use client";
import {useAppContext} from "@/app/contexts/AppContext";
import styles from "./AddToCart.modules.css"


const AddToCart = ({name, price, id, description, sizes, colors, image}) => {
    const {handleAddToCart} = useAppContext();//función para agregar el producto al carrito de compras
    
    const handleClick = () => {
      handleAddToCart(name, price, image, description, sizes, colors, id, 1); // cuando hace click llama a handleAddToCart con los datos del producto 
  };

  return (
      <>
          <button onClick={handleClick} className="comprarBtn">Comprar</button>
      </>
  );
};
 export default AddToCart;