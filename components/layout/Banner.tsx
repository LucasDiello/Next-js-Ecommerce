"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import Header from './Header'
import hero from '../../images/hero.jpg'
import "@/styles/banner.css"
import "@/styles/card.css"
import { ArrowDown } from 'lucide-react'


 function Banner() {
  // Cria um ref para a próxima seção
  const nextSectionRef = useRef<HTMLElement | null>(null)

  // Função para rolar até a próxima seção
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='h-[100vh] b'>
      <div className='sub-hero h-[100vh] w-full bg-black absolute opacity-10 z-[-2]' />
      <Header />
      <div className='hero bg-black'>
        <Image src={hero} alt='hero' className='h-[100vh] object-cover relative z-[-3]' fill />
      </div>
      <div className='w-full h-[80vh] flex justify-center items-center text-white'>
        <div className='w-full flex justify-center flex-col items-center space-y-5'>
          <p className='text-xs tracking-widest'>
            This is a shop where you can buy all the things you need. We have
          </p>
          <h1 className='h1-shop font-[cursive] text-white text-9xl'>
            Welcome to the <span className='shop'>Shop</span>
          </h1>
          <button className="btn-17 !mt-20">
  <span className="text-container">
    <span className="text">Let's go buy!!</span>
  </span>
</button>
        </div>
      </div>
      <section ref={nextSectionRef} className='h-[100vh]  absolute w-full '>
        <h2 className='text-center text-4xl font-[cursive] text-white '>
			Explore our products
		</h2>
		<div className='w-full flex justify-center mt-10'>
      <div onClick={scrollToNextSection} className='animate-bounce hover:rounded-[50%] hover:bg-[#333] hover:text-white hover:transition-all cursor-pointer w-12 h-12 flex justify-center items-center '>
		<ArrowDown size={30} className=' text-white '  />
      </div>
		</div>
      </section>
    </section>
  )
}

export default Banner
