import ProductList from '@/components/shop/ProductList'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
import Header from '@/components/layout/Header'
import ItensModal from '@/components/modal/ItensModal'

export default function Home() {
  return (
    <>
    <ItensModal />
      <Header />
      <Hero />
     <ProductList />
     <Footer />
    </>
  )
}
