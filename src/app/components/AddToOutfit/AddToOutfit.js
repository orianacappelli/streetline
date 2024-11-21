"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import styles from "./AddToOutfit.modules.css";

const AddToOutfit = ({ name, price, image, description, sizes, colors, id }) => {
    const { handleAddToOutfit } = useAppContext();

    const handleClick = () => {
        handleAddToOutfit(name, price, image, description, sizes, colors, id);
    };

    return (
        <>
            <button onClick={handleClick} className="probarBtn">PROBAR</button>
        </>
    );
};

export default AddToOutfit;