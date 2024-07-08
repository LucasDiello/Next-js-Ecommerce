import React from 'react';
import Logo from './logo';
import CartButton from './Cart-button';
import UserNav from './User-nav';

function Header() {
  return (
    <header className='bg-black w-full'>
      <div className="flex container mx-auto items-center text-white justify-between">
        <a href="/products">
        HOME
        </a>
        <div className='flex space-x-10'>
          <CartButton />
          <UserNav />
        </div>
      </div>
      <div className='text-end text-white text-[10px] h-4 bg-gray-800'>
        <div className="marquee aston-font uppercase">
          <p>
          Descubra as últimas tendências os nossos produtos exclusivos.
          Com as melhores ofertas e <span className='font-bold'>promoções!</span>.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
