import React from 'react';
import Logo from './logo';
import CartButton from './Cart-button';
import UserNav from './User-nav';

function Header() {
  return (
    <header className='bg-[#121212] w-full h-10 '>
      <div className="flex container mx-auto items-center text-white justify-between">
        <a href="/products" className='m-0 no-underline text-white sans-fonte font-bold tracking-wider'>
        HOME
        </a>
        <div className='flex justify-center items-center space-x-4'>
          <CartButton />
          <UserNav />
        </div>
      </div>
      <div className='text-end w-full text-white text-[10px] h-4 bg-gray-800'>
        <div className="marquee aston-font uppercase">
          <p className='m-0'>
          Descubra as últimas tendências os nossos produtos exclusivos.
          Com as melhores ofertas e <span className='font-bold'>promoções!</span>.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
