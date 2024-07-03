import React from 'react';
import Logo from './logo';
import CartButton from './Cart-button';
import UserNav from './User-nav';


function Header() {
  return (
    <header className='shadow w-full z-30 mt-5 lg:mt-0 bg-inherit absolute'>
      <div  className="header-bg w-[100%] absolute z-50 ms-auto lg:p-10 h-full p-2 flex items-center justify-between ">
        <Logo />
        <div className='flex items-center justify-center space-x-4'>
          <CartButton />
          <UserNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
