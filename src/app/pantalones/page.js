import Inner from '@/app/components/Inner';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import { getAllProductsDB } from '@/app/actions';
import style from "./Pantalones.modules.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  const selectedProduct = response.products.filter(product => product.category === "pantalon");
  return (
    <section>
      <Inner>
        <div className='container-pl'>
          <div className='articulos-pl'>
          <h2><Link href={`/remeras`}>Remeras</Link></h2>
          <h2><Link href={`/pantalones`}>Pantalones</Link></h2>
          <h2><Link href={`/zapatillas`}>Zapatillas</Link></h2>
          </div>
          <div className='productos-pl'>
            {selectedProduct.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
}