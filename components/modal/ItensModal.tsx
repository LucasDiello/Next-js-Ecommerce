"use client"

import React, { useState, useEffect } from 'react';
import "@/styles/modal.css";
import modalImage from "@/images/1.jpg";
import Image from 'next/image';
import { X } from 'lucide-react';
import { AiFillAlert } from "react-icons/ai";

const items = [
    {
        name: "Asus Zenbook",
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
  const [open, setOpen] = useState(true);

  const currentItem = items[0];

  return (
    <>
   { open && <div className='fixed flex-col rounded-xl w-[300px] h-[150px] flex bg-[#fbfbfb] shadow-2xl bottom-4 left-6 z-50'>
      <button onClick={() => 
        setOpen((prev) => !prev)
      } className='cursor-pointer border-none bg-[rgb(31,41,55)] h-6 w-6 flex justify-center items-center text-xl absolute right-0 top-[-5px] rounded-full'>
        <X size={20} color='white' />
      </button>
      <div className='ml-8 mb-4'>
        <h1 className='absolute top-4 left-[3.2rem] font-body font-bold text-[#333]'>
        <AiFillAlert size={24} color='red' className='shadow-xl'/>
        </h1>
      </div>
      <div className='flex'>
      <div className=' w-[125px] '>
        <Image src={currentItem.image} alt="Item" className='w-[145px] rounded-s-xl h-full object-cover' />
      </div>
      <div className='flex flex-col justify-center space-y-2'>
        <h1 className='font-bold text-[#333] leading-6 text-2xl'>{currentItem.name}</h1>
        <p className='text-sm text-gray-400'>from {currentItem.locale}</p>
        <p className='text-sm text-gray-400'>{currentItem.time}</p>
      </div>
      </div>
    </div>
  }
    </>
  );
};

export default ItensModal;
