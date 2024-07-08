import Image from 'next/image'
import React from 'react'
import Header from './Header'
import hero from '../../images/hero.jpg'
import "@/styles/banner.css"
import "@/styles/card.css"

async function Banner() {
  return (
    <section className='h-[100vh] b '>
    <div className='sub-hero h-[100vh] w-full bg-black absolute opacity-20 z-[-1]' />
    <div className='hero'>
      <Header />
      <Image src={hero} alt='hero' className='h-[100vh] object-cover absolute top-0 z-[-2]' fill />
    </div>
    <div className='container h-full   flex justify-between  '>
      <div className='flex flex-col justify-center w-full pb-20 space-y-10'>
      <h1 className='text-7xl text-[#121212] anton-font '>LD TECH <br /> PRODUTOS TECNOLÓGICOS </h1>
      <p className='max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda dolorem doloribus debitis? A minima, praesentium suscipit, officia deserunt maiores, eos architecto temporibus vel ipsum veritatis obcaecati dolorem fugit dolore.
      </p>
	  <a class="fancy" href="#">
  <span class="top-key"></span>
  <span class="text">Ir as compras!!</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
      </div>
      <section className='w-full mt-5 fle pl-20'>
	<div className="row flex flex-col">
		<div className="relative left-[10%] w-[200px]">
			<div className="card">
				<div className="cover item-a">
					<h1>Celular<br/>Iphone 8</h1>
					<span className="price">R$500+</span>
					<div className="card-back">
						<a href="#">Veja mais</a>
					</div>
				</div>
			</div>
		</div>
		<div className=" relative left-[35%] bottom-[60px] w-[200px]">
			<div className="card">
				<div className="cover item-b">
					<h1>Relógio<br/>Smart watch</h1>
					<span className="price">R$500+</span>
					<div className="card-back">
						<a href="#">Veja mais</a>
					</div>
				</div>
			</div>
		</div>
		<div className="relative left-[10%] bottom-[120px] z-[-1] w-[200px]">
			<div className="card">
				<div className="cover item-c">
					<h1>Air<br/>Jordan</h1>
					<span className="price">R$500-</span>
					<div className="card-back">
						<a href="#">Veja mais</a>
					</div>
				</div>
			</div>
		</div>
    <div className="hidden relative left-[35%] bottom-[180px] w-[200px] xl:block">
			<div className="card">
				<div className="cover item-d">
					<h1>Air<br/>Max</h1>
					<span className="price">R$500-</span>
					<div className="card-back">
						<a href="#">Veja mais</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  </section>
  )
}
export default Banner