import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import { getAllProductsDB } from '@/app/actions';
import style from "./ProductsGrid.modules.css";

export default async function ProductsGrid() {
  //obtengo los productos que estan en la base de datos
  const response = await getAllProductsDB();

  //poner los productos que estan en true
  const featuredProducts = response.products.filter(product => product.featured === true);

  return (
    <section>
      <Inner>
        <h2>Nuestros Productos Destacados</h2>
        <div className='grid grid-cols-12'>
          {featuredProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}