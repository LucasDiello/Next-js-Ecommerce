import ProductList from '@/components/shop/ProductList'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ItensModal from '@/components/modal/ItensModal'
import HomeLayout from '@/components/hero/Hero'

export default function Home() {
  return (
    <>
    <ItensModal />
      <Header />
      <HomeLayout />
     <ProductList />
     <Footer />
    </>
  )
}
