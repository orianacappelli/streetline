import Image from "next/image";
import Link from 'next/link';
import { getAllProductsDB } from '@/app/actions';
import style from "./SelectProduct.modules.css"


const SelectProduct = async () => {
  const response = await getAllProductsDB();
  //poner los productos que estan en true
  const selectedRemera = response.products.filter(product => product.selectRemera === true);
  const selectedPantalon = response.products.filter(product => product.selectPantalon === true);
  const selectedZapatilla = response.products.filter(product => product.selectZapatilla === true);
  return (
    <div>
      <h2 className="outfit">Arma tu Outfit</h2>
      <div className="product-grid">
      {selectedRemera.map((product, index) => (
        <div key={index} className='product-item'>
          <Link href={`/remeras`}>
            <Image
                src={`/images/productos/${product.image}`}
                alt={`Imagen del producto ${product.id}`}
                width={100}
                height={100}
            />
          </Link>
        </div>
      ))}
      {selectedPantalon.map((product, index) => (
        <div key={index} className='product-item'>
          <Link href={`/pantalones`}>
            <Image
                src={`/images/productos/${product.image}`}
                alt={`Imagen del producto ${product.id}`}
                width={100}
                height={100}
            />
          </Link>
        </div>
      ))}
      {selectedZapatilla.map((product, index) => (
        <div key={index} className='product-item'>
          <Link href={`/zapatillas`}>
            <Image
                src={`/images/productos/${product.image}`}
                alt={`Imagen del producto ${product.id}`}
                width={100}
                height={100}
            />
          </Link>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default SelectProduct;
