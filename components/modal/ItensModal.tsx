"use client"

import React, { useState, useEffect } from 'react';
import "@/styles/modal.css";
import modalImage from "@/images/modalImg.jpg";
import Image from 'next/image';
import { X } from 'lucide-react';
const items = [
    {
        name: "Notebook Dell",
        locale: "USA",
        time: "10:00",
        image: modalImage,

    },
    {
        name: 'Item 2',
        locale: 'Local 2',
        time: '11:00',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Item 3',
        locale: 'Local 3',
        time: '12:00',
        image: '/path/to/image3.jpg',
    },
    ];


const ItensModal = () => {
    //later add a function to change the current item
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = items[0];

  return (
    <div className='fixed rounded-xl w-[300px] h-[150px] flex bg-[#ffffff] shadow-2xl bottom-4 left-6 z-50'>
      <div className='cursor-pointer'>
        <X size={16} className='m-0 bg-[rgb(31,41,55)] rounded-2xl absolute right-0 top-[-5px] ' color='white' />
      </div>
      <div className=' w-[125px] h-[150px] mr-8'>
        <Image src={currentItem.image} alt="Item" className='w-[145px] rounded-s-xl h-full object-cover' />
      </div>
      <div className=' justify-center  flex flex-col space-y-2'>
        <h1 className='font-bold text-[#333] leading-6 text-2xl'>{currentItem.name}</h1>
        <p className='text-sm text-gray-400'>from {currentItem.locale}</p>
        <p className='text-sm text-gray-400'>{currentItem.time}</p>
      </div>
    </div>
  );
};

export default ItensModal;
