import Image from 'next/image'
import React from 'react'
import imgBanner from "../../images/hero-image.webp"

function Banner() {
  return (
    <section className='w-full h-[90vh] flex justify-center items-center relative'>
    <div className='bg-black w-[100%] h-[65vh] opacity-50 absolute z-10' />
    <Image src={imgBanner} alt={'banner'} className="absolute w-[100%] h-[65vh] object-cover blur-sm" />
    <div className='flex justify-center flex-col items-center absolute p-10 z-50 text-white'>
      <h1 className='font-bold lg:text-7xl text-2xl'>Bem vindo a nossa loja</h1>
        <span className='lg:p-10 text-sm mt-5 text-white max-w-[800px] text-center '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem sint maxime totam cum placeat <br /> sed, deleniti quasi aperiam tenetur facilis eligendi aliquid laboriosam rerum! <br />
          Eos tempora saepe quam repellendus ut!
        </span>
    </div>
  </section>
  )
}

export default Banner