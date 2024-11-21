import React from 'react';
import style from './Footer.modules.css';
import Image from "next/image";
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <Link href={`/`}>
          <Image
            src={`/images/imgs/logo-st.svg`}
            width={100}
            height={100}
            alt='Logo'
          />
        </Link>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com">
            <FaInstagram /> Instagram
          </a>
          <a href="https://x.com/">
            <FaTwitter /> Twitter
          </a>
          <a href="https://tiktok.com">
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;