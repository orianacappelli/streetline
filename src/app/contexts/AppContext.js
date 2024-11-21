"use client";

import { createContext, useState, useContext } from 'react';
import productos from '../data/products';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {// Este componente envolverá a los componentes hijos y les dará acceso a todo lo que se pase a través del contexto
  const [cart, setCart] = useState([]); // Cart almacena los productos añadidos al carrito
  const [outfit, setOutfit] = useState([]);// Outfit almacena los productos añadidos a la selección de outfits

  const cartLength = cart.length//numero de prodcutos en el carrito

  const handleAddToCart = (name, price, image, description, sizes, colors, id, quantity) => {//añadir prodcutos al carrito
    const product = {//crea un objeto de producto con la información que se pasa como parámetro
      name,
      price,
      image,
      description,
      sizes,
      colors,
      id,
      quantity
    }
    const existingProduct = cart.find((item) => item.id === id);//si el producto ya está en el carrito
    if(existingProduct){//si esta incrementa la cantidad
      existingProduct.quantity += quantity;
      return setCart(([...cart]));//se actualiza el estado
    }else{//si no esta se añade el nuevo
      setCart([...cart, product]/*[...]agarra todo lo que tenia en cart y le agrega un valor mas*/);
    }
  };

 
const handleAddToOutfit = (name, price, image, description, sizes, colors, id, quantity) => {//funcion para añadir los prodcutos a outfit
  const product = {
    name,
    price,
    image,
    description,
    sizes,
    colors,
    id,
    quantity
  }
  const existingProduct = outfit.find((item) => item.id === id);
  if(existingProduct){
    existingProduct.quantity += quantity;
    return setOutfit(([...outfit]));
  }else{
    setOutfit([...outfit, product]/*[...]agarra todo lo que tenia en cart y le agrega un valor mas*/);
  }
};


  const handleRemoveProduct = (id) => {//eliminar el producto del carrito y de outfit
    setCart(cart.filter((product) => product.id !== id));
    setOutfit(outfit.filter((product) => product.id !== id));
  }

  const paseOutfit = () => {//pasar de outfit al carrito
    setCart((prevCart) =>{//se crea una nueva copia del carrito y se añaden los productos del outfit
      const nuevoCart = [...prevCart];//copia del carrito anterior

      outfit.forEach((product) => {//busca si el producto ya está en el carrito
        const existingProduct = nuevoCart.find((item) => item.id === product.id);

        if (existingProduct) {
          //si ya existe, aumenta la cantidad (asume que quantity por defecto es 1)
          existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        } else {
          //si no existe, lo agrega al carrito con cantidad inicial 1
          nuevoCart.push({ ...product, quantity: 1 });
        }
      });
      return nuevoCart;//devuelve el nuevo carrito con los productos añadidos
    })
    setOutfit([]);//después de pasar los productos al carrito, se vacía el outfit.
  };
 

  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity ,0);//calcular el total del carrito
  //reduce recorre el carrito y acumula el total del precio multiplicado por la cantidad de cada producto.

  return (//envuelve a los hijos del componente y les da acceso a los valores definidos en `value`
    <AppContext.Provider
      value={{
        cart,
        setCart,
        outfit,
        setOutfit,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct,
        handleAddToOutfit,
        paseOutfit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {//para acceder al contexto en los componentes hijos
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;