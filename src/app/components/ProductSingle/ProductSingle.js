"use client";
import {useAppContext} from "@/app/contexts/AppContext";
import { useState } from 'react';
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart/AddToCart";
import styles from "./ProductSingle.modules.css"; 
import AddToOutfit from "@/app/components/AddToOutfit/AddToOutfit";

const ProductSingle = ({ product }) => {
    const { image, name, price, description, colors, sizes, _id } = product;
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const handleSizeSelection = (sizes) => {
        setSelectedSize(sizes);// Actualiza el estado con la talla seleccionada.
    };
    const handleColorSelection = (colors) => {
        setSelectedColor(colors); // Actualiza el estado con el color seleccionado.
    };

    return (
        <section className="productSingle">
            <div className="contenedorps">
                <div className="contimg">
                    <Image
                        src={`/images/productos/${image}`}
                        alt={name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="continfo">
                    <h1 className="productTitle">{name}</h1>
                    <h3 className="productPrice">${price}</h3>
                    
                    <div className="productColors">
                        {colors.map((colors, index) => (
                            <button
                                key={index}
                                className={`colorSwatch ${selectedColor === colors ? 'selected' : ''}`}// se pone la clase 'selected' si el color está seleccionado.
                                onClick={() => handleColorSelection(colors)}//haces click y llama a la funcion
                                style={{ backgroundColor: ColorHex(colors) }}//se guarda el color dentro del botno
                            ></button>
                        ))}
                    </div>
                    
                    <div className="productSizes">
                        {sizes.map((sizes, index) => (
                            <button key={index}
                                className={`sizeBtn ${selectedSize === sizes ? 'selected' : ''}`}// se pone la clase 'selected' si la talla está seleccionada.
                                onClick={() => handleSizeSelection(sizes)}//haces click y llama a la funcion
                            >{sizes}</button>//se guarda la talla dentro del botno
                        ))}
                    </div>
                    
                    <div className="productActions">
                        <AddToCart className="comprarBtn" price={price} name={name} image={image} description={description} sizes={selectedSize} colors={selectedColor}id={_id}/>
                        <AddToOutfit className="probarBtn" price={price} name={name} image={image} description={description} sizes={selectedSize} colors={selectedColor}id={_id}/>
                    </div>
                    
                    <p className="productDescription">{description}</p>
                </div>
            </div>
        </section>
    );
};

// Función para convertir los colores de palabras a colores hex
const ColorHex = (colors) => {
    switch(colors) {
        case "negro": return "#000000";
        case "azul": return "#0000FF";
        case "blanco": return "#FFFFFF";
        case "rojo": return "#FF0000";
        default: return "#CCCCCC";
    }
};

export default ProductSingle;