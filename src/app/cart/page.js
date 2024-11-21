import Inner from "@/app/components/Inner"
import ProductsCheckout from "@/app/components/Cart/ProductsCheckout"
import style from "./Cart.modules.css"
import CartForm from "../components/CartForm/CartForm"

const Cart = () => {
  return (
    <section className='h-screen'>
      <Inner>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="cart-id">Identificación</h1>
            <CartForm/>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ProductsCheckout/>
          </div>
        </div>
      </Inner>
    </section>
    )
}

export default Cart