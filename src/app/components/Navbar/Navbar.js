'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingBag, FaUser } from "react-icons/fa";
import style from "./Navbar.modules.css";

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <ul>
          <li><Link href={`/shop`}>Productos</Link></li>
          <li><Link href={`/outfit`}>Outfit</Link></li>
        </ul>
      </div>
      <div className='navbar-center'>
        <Link href={`/`}>
          <Image
            src={`/images/imgs/logo-st.svg`}
            width={70}
            height={70}
            alt='Logo'
          />
        </Link>
      </div>
      <div className='navbar-right'>
      <Link href={`/cart`}>
        <div className="cart-container">
          <FaShoppingBag />
          
          {cartLength > 0 && (
            <span className='navbar-icon' >
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
      </div>
    </nav>
  );
}
