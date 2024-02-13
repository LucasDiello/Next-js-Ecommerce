import ProductList from '@/components/shop/ProductList'
import Image from 'next/image'
import imgBanner from '@/images/hero-image.webp'
import Banner from '@/components/layout/Banner'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
    <section className='w-full h-[65vh] flex justify-center items-center relative'>
    <div className='bg-black w-[100%] h-[65vh] opacity-50 absolute z-10' />
    <Image src={imgBanner} alt={'banner'} className="absolute w-[100%] h-[65vh] object-cover blur-sm" />
    <div className='flex justify-center flex-col items-center absolute p-10 z-50 text-white'>
      <h1 className='font-bold lg:text-7xl text-2xl'>
        Welcome to store <span>
          LD Tech
        </span>
      </h1>
        <span className='lg:p-10 text-sm mt-5 text-white max-w-[800px] text-center '>
          Here you can find the best products for your home, office, or personal use. <br /> We have a wide variety of products for you to choose from. <br />
          Go ahead and take a look at our products and find <br /> the one that best suits your needs.
        </span>
    </div>
  </section>
      <ProductList />
      <Footer />
    </>
  )
}
