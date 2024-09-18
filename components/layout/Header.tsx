import React from 'react';
import Logo from './logo';
import CartButton from './Cart-button';
import { ArrowBigLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { ImExit } from 'react-icons/im';

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
          <Link onClick={() => {
            localStorage.clear();
          }} href={"/"} className="text-white flex items-center justify-center gap-2 sans-font no-underline tracking-wider">
            <ImExit size={16}/>
            Log out
          </Link>
        </div>
      </div>
      <div className='text-end w-full text-white h-4 bg-gray-800'>
        <div className="marquee hidden md:flex aston-font uppercase">
          <p className='m-0 '>
          Discover the latest trends in our exclusive products.
          With the best offers and promotions!  
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
