import Inner from '@/app/components/Inner';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import { getAllProductsDB } from '@/app/actions';
import style from "./Zapatillas.modules.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  const selectedProduct = response.products.filter(product => product.category === "zapatilla");
  return (
    <section>
      <Inner>
        <div className='container-zt'>
          <div className='articulos-zt'>
          <h2><Link href={`/remeras`}>Remeras</Link></h2>
          <h2><Link href={`/pantalones`}>Pantalones</Link></h2>
          <h2><Link href={`/zapatillas`}>Zapatillas</Link></h2>
          </div>
          <div className='productos-zt'>
            {selectedProduct.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
}