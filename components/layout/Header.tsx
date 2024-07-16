import React from 'react';
import Logo from './logo';
import CartButton from './Cart-button';
import UserNav from './User-nav';
import { ArrowBigLeftIcon } from 'lucide-react';

function Header() {
  return (
    <header className='bg-[#121212] w-full h-9 text-sm'>
      <div className="flex container mx-auto items-center text-white justify-between">
        <a href="/products" className='m-0 no-underline  text-white sans-fonte font-bold tracking-wider flex items-center'>
        <ArrowBigLeftIcon size={16} className="m-0" color="white" />
        HOME
        </a>
        <div className='flex justify-center items-center space-x-4'>
          <CartButton />
          <UserNav />
        </div>
      </div>
      <div className='text-end w-full text-white h-4 bg-gray-800'>
        <div className="marquee aston-font uppercase">
          <p className='m-0'>
          Descubra as últimas tendências os nossos produtos exclusivos.
         Com as melhores ofertas e promoções!
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
