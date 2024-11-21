import Image from 'next/image';
import Link from 'next/link';
import style from "./ProductCard.modules.css";

const ProductCard = ({ item }) => {
  return (
    <div className="card card-container">
      <Link href={`/product/${item._id}`}><Image
        src={`/images/productos/${item.image}`}
        alt={item.name}
        width={900}
        height={900}
        
      /></Link>
      <hr/>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <Link className="boton" href={`/product/${item._id}`}>Ver</Link>
    </div>
    
  );
};

export default ProductCard;