import Hero from '@/app/components/Hero/Hero';
import SelectProduct from '@/app/components/SelectProduct/SelectProduct'
import ProductsGrid from "@/app/components/ProductsGrid/ProductsGrid"



export default function Home() {
  return (
    <div>
      <Hero />
      <SelectProduct />
      <ProductsGrid />
    </div>
  );
}
