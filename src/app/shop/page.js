import Inner from '@/app/components/Inner';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import { getAllProductsDB } from '@/app/actions';
import style from "./Shop.modules.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section>
      <Inner>
        <div className='container-sp'>
          <div className='articulos'>
          <h2><Link href={`/remeras`}>Remeras</Link></h2>
          <h2><Link href={`/pantalones`}>Pantalones</Link></h2>
          <h2><Link href={`/zapatillas`}>Zapatillas</Link></h2>
          </div>
          <div className='productos-td'>
            {response.products && response.products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
}
