import ProductList from '@/components/shop/ProductList'
import Image from 'next/image'
import imgBanner from '@/images/hero-image.webp'
import Banner from '@/components/layout/Banner'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
<Banner />
      <ProductList />
      <Footer />
    </>
  )
}
